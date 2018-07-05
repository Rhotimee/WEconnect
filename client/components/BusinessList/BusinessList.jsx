import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ListBusiness from './BusinessListItem';
import { fetchBusinesses } from '../../actions/businessAction';

/**
 * @class BusinessList
 *
 * @classdesc List all businesses
 *
 */
class BusinessList extends Component {
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
      text: this.props.search,
      type: this.props.type,
      page: this.props.page,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
   * @description componentDidMount
   *
   * @returns {void}
   */
  componentDidMount() {
    this.props.fetchBusinesses(this.state.page, this.state.type, this.state.text);
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
    // this.setState({ errors: {}, isLoading: true });
    this.props.fetchBusinesses(this.state.type, this.state.text);
  }

  /**
   * @description render - renders the class component
   *
   * @return {object} returns an object
   *
   */
  render() {
    const eachBusiness = this.props.businesses.map(business => (
      <ListBusiness
        key={business.id}
        business={business}
      />
    ));

    return (
      <div>
        <div className="nav-2 py-2">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-dark mx-2 my-1" to="/">Resturant</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-dark mx-2 my-1" to="/">Coffee</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-dark mx-2 my-1" to="/">Fun</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-dark mx-2 my-1" to="/">Nightlife</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-dark mx-2 my-1" to="/">Shopping</Link>
            </li>
          </ul>
        </div>
        <div className="container my-5">

          {eachBusiness}

        </div>
      </div>
    );
  }
}

BusinessList.propTypes = {
  search: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  fetchBusinesses: PropTypes.func.isRequired,
};

BusinessList.contextTypes = {
  router: PropTypes.object.isRequired
};

/**
   * @description mapStateToProps
   *
   * @param  {object} state  the state
   *
   * @returns {void}
   */
function mapStateToProps(state) {
  return {
    businesses: state.Businesses.allBusinesses,
    search: state.search.search,
    type: state.search.type,
    page: state.search.page
  };
}

export default connect(mapStateToProps, { fetchBusinesses })(BusinessList);
