import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Aux } from '../aux';
import { userSignoutRequest, fetchOneUser } from '../../actions/userActions';

class Navbar extends Component {
  // componentWillMount() {
  //   this.props.fetchOneUser(this.props.signedInUser.signedInUser.id);
  // }

  render() {
    // const { user } = this.props;

    // if (!user) {
    //   return <h2>Loading...</h2>;
    // }

    const Auth = (
      <Aux>
        <li className="nav-item mr-3">
          <Link className="nav-link" to="/add-business">Add Business</Link>
        </li>
        {/* <div className="dropdown mr-3">
          <Link
            className="nav-link dropdown-toggle"
            to={`/user/${user.id}`}
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >{user.firstName}
          </Link>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link className="dropdown-item" to={`/user/${user.id}`}>My Profile</Link>
            <Link className="dropdown-item" to={`/user/${user.id}/update`}>Update Profile</Link>
            <Link className="dropdown-item" to="#">Change Password</Link>
            <Link className="dropdown-item" to="/" onClick={() => this.props.userSignoutRequest()}>Signout</Link>
          </div>
        </div> */}
      </Aux>
    );

    const Guest = (
      <Aux>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Log In</Link>
        </li>
        <li className="nav-item mr-2">
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
      </Aux>
    );

    return (
      <nav className=" navbar navbar-expand-sm navbar-dark nav-bg py-3">
        <Link className="navbar-brand ml-3" to="/">WECONNECT</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/businesses"><i className="fa fa-th" aria-hidden="true" /> Explore</Link>
            </li>
            {this.props.signedInUser.isAuthenticated ? Auth : Guest }
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    signedInUser: state.user_reducer,
    user: state.oneUser.oneUser,
  };
}


export default connect(mapStateToProps, { userSignoutRequest, fetchOneUser })(Navbar);
