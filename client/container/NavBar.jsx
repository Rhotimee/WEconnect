import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import alertify from 'alertifyjs';
import { Aux } from '../hoc/aux';
import { userSignoutRequest } from '../actions/userActions';
import { fetchBusinesses, setSearch } from '../actions/businessAction';

/**
 * @class LoginForm
 *
 * @classdesc logs in user
 *
 */
export class Navbar extends Component {
  /**
   * constructor - contains the constructor
   *
   * @param  {object} props the properties of the class component
   *
   * @return {void} no return or void
   *
   */
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      type: '',
      page: 1,
    };
    const { onChange, onSignout, onSubmit } = this;
    this.onChange = onChange.bind(this);
    this.onSubmit = onSubmit.bind(this);
    this.onSignout = onSignout.bind(this);
  }

  /**
   * @description onChange
   *
   * @param  {object} event  the event
   *
   * @returns {void}
   */
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  /**
   * @description onChange
   *
   * @param  {object} event  the event
   *
   * @returns {void}
   */
  onSubmit(event) {
    event.preventDefault();

    const { setSearch, fetchBusinesses } = this.props;
    const { text, type, page } = this.state;

    setSearch({ search: text, type });
    // this.setState({ errors: {}, isLoading: true });
    fetchBusinesses(page, type, text)
      .then(
        () => {
          this.context.router.history.push('/businesses');
        },
        ({ response }) => {
          alertify.set('notifier', 'position', 'top-right');
          alertify.error(response.data.message);
        }
      );
  }


  /**
   * @description onSignout
   *
   * @param  {object} event  the event
   *
   * @returns {void}
   */
  onSignout(event) {
    event.preventDefault();
    this.props.userSignoutRequest();
    this.context.router.history.push('/');
    alertify.set('notifier', 'position', 'top-right');
    alertify.success('Signed Out Successfully');
  }

  /**
   * @description render - renders the class component
   *
   * @return {object} returns an object
   *
   */
  render() {
    const { signedInUser } = this.props.signedInUser;
    const { id } = signedInUser;
    const Auth = (
      <Aux>
        <li className="nav-item mr-3">
          <Link
            className="nav-link"
            to="/add-business"
            id="add-business"
          >Add Business
          </Link>
        </li>
        { signedInUser ? (
          <div className="dropleft mr-3">
            <Link
              className="nav-link dropdown-toggle"
              to={`/user/${id}`}
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              href
            >{signedInUser.firstName}
            </Link>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link className="dropdown-item" to={`/user/${id}`} href>My Profile</Link>
              <Link className="dropdown-item" to={`/user/${id}/update`} href>Update Profile</Link>
              <Link className="dropdown-item" to="/">Change Password</Link>
              <Link className="dropdown-item" to="/" id="signout" onClick={this.onSignout} href>Signout</Link>
            </div>
          </div>
        ) : null}
      </Aux>
    );

    const Guest = (
      <Aux>
        <li className="nav-item mr-3">
          <Link className="btn btn-outline-light" to="/login">Login</Link>
        </li>
        <li className="nav-item mr-3">
          <Link className="btn btn-outline-light" to="/signup">Signup</Link>
        </li>
      </Aux>
    );

    return (
      <nav className="sticky-top navbar navbar-expand-md navbar-dark nav-nav py-3">
        <Link className="navbar-brand ml-3" to="/">WECONNECT</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        {
          this.props.showBox === false

          ? null :

          <form className="form-inline ml-md-5 ml-xs-3 mav-search" onSubmit={this.onSubmit}>
            <input
              name="text"
              className="form-control mr-sm-1 my-1"
              type="search"
              placeholder="I'm looking for..."
              aria-label="Search"
              value={this.state.text}
              onChange={this.onChange}
            />
            <select
              className="form-control mr-sm-1 my-1"
              onChange={this.onChange}
              name="type"
            >
              <option defaultValue>Choose...</option>
              <option value="location">Location</option>
              <option value="category">Category</option>

            </select>
            <button className="btn btn-outline-light" type="submit"><i className="fas fa-search" /></button>
          </form>
        }

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-3">
              <Link id="explore" className="nav-link text-light" to="/businesses"><i className="fa fa-th" aria-hidden="true" /> Explore </Link>
            </li>
            {this.props.signedInUser.isAuthenticated ? Auth : Guest }
          </ul>
        </div>
      </nav>
    );
  }
}

/**
   * @description mapStateToProps
   *
   * @param  {object} state  the state
   *
   * @returns {void}
   */
function mapStateToProps(state) {
  return {
    signedInUser: state.userReducer,
  };
}

Navbar.propTypes = {
  userSignoutRequest: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired,
  fetchBusinesses: PropTypes.func.isRequired,
  signedInUser: PropTypes.object.isRequired,
  showBox: PropTypes.bool.isRequired,
};

Navbar.contextTypes = {
  router: PropTypes.object.isRequired
};


export default connect(mapStateToProps, { userSignoutRequest, setSearch, fetchBusinesses })(Navbar);

