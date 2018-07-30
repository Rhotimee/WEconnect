import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import alertify from 'alertifyjs';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import ListBusiness from '../components/BusinessListItem';
import { fetchBusinesses, setSearch } from '../actions/businessAction';

/**
 * @class BusinessList
 *
 * @classdesc List all businesses
 *
 */
export class BusinessList extends Component {
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

    const { search, type, page } = this.props;
    this.state = {
      text: search,
      type,
      page,
      current: 1
    };

    const { onChange } = this;
    this.onChange = onChange.bind(this);
  }

  /**
   * @description componentDidMount
   *
   * @returns {void}
   */
  componentDidMount() {
    const { page, type, text } = this.state;
    this.props.fetchBusinesses(page, type, text);
  }

  /**
   * @description onChange
   *
   * @param  {object} page  the event
   *
   * @returns {void}
   */
  onChange(page) {
    const { type, text } = this.state;
    this.setState({ current: page });
    this.props.fetchBusinesses(page, type, text);
  }

  /**
   * @description onCLick
   *
   * @param  {text}  text
   *
   * @returns {object} returns business object
   */
  onClick(text) {
    const { setSearch, fetchBusinesses } = this.props;
    const { page } = this.state;
    setSearch({ search: text, type: 'category' });

    fetchBusinesses(page, 'category', text)
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
   * @description render - renders the class component
   *
   * @return {object} returns an object
   *
   */
  render() {
    if (!this.props.data.businesses) {
      return <p>Loading...</p>;
    }

    const eachBusiness = this.props.data.businesses.rows.map((business) => {
      const {
        id, Image, category, location, name, reviews
      } = business;
      return (
        <ListBusiness
          key={id}
          Image={Image}
          id={id}
          category={category}
          location={location}
          name={name}
          reviews={reviews}
        />
      );
    });

    return (
      <div>
        <div className="nav-2 py-2">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <div
                className="nav-link btn btn-outline-dark mx-2 my-1"
                onClick={() => this.onClick('restaurant')}
              >Resturant
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link btn btn-outline-dark mx-2 my-1"
                onClick={() => this.onClick('professional')}
              >Professional
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link btn btn-outline-dark mx-2 my-1"
                onClick={() => this.onClick('fun')}
              >Fun
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link btn btn-outline-dark mx-2 my-1"
                onClick={() => this.onClick('nightlife')}
              >Nightlife
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link btn btn-outline-dark mx-2 my-1"
                onClick={() => this.onClick('shopping')}
              >Shopping
              </div>
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
  data: PropTypes.object.isRequired,
  setSearch: PropTypes.func.isRequired,
  fetchBusinesses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { fetchBusinesses, setSearch })(BusinessList);
