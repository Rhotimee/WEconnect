import 'rc-pagination/assets/index.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Pagination from 'rc-pagination';
import ListBusiness from '../components/BusinessListItem';
import { fetchBusinesses } from '../actions/businessAction';

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
      current: 1
    };

    this.onChange = this.onChange.bind(this);
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
   * @param  {object} page  the event
   *
   * @returns {void}
   */
  onChange(page) {
    this.setState({ current: page });
    this.props.fetchBusinesses(page, this.state.type, this.state.text);
  }

  /**
   * @description render - renders the class component
   *
   * @return {object} returns an object
   *
   */
  render() {
    if (!this.props.data.businesses) {
      return <p>Loading...</p>;
    }

    const eachBusiness = this.props.data.businesses.rows.map(business => (
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

        <div className="d-flex justify-content-center">
          <Pagination
            showTotal={(total, range) =>
                `${range[0]} - ${range[1]} of ${this.props.data.pagination.pages} businesses`
              }
            total={this.props.data.businesses.count}
            defaultPageSize={5}
            current={this.state.current}
            onChange={this.onChange}
          />
        </div>

      </div>
    );
  }
}

BusinessList.propTypes = {
  search: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
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
    data: state.Businesses.allBusinesses,
    search: state.search.search,
    type: state.search.type,
    page: state.search.page,
  };
}

BusinessList.propTypes = {
  rows: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { fetchBusinesses })(BusinessList);
