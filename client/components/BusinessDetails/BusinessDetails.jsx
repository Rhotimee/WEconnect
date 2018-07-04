import React, { Component } from 'react';
import { connect } from 'react-redux';
import alertify from 'alertifyjs';
import PropTypes from 'prop-types';
import { fetchOneBusiness, deleteOneBusiness } from '../../actions/businessAction';
import { fetchReviews, addReview } from '../../actions/reviewsAction';
import ReviewCard from './ReviewCard';
import averageReviews from '../../helpers/averageStar';
import stars from '../../helpers/stars';
import Loader from '../Loader';


/**
 * @class BusinessDetails
 *
 * @classdesc Details of business
 *
 */
class BusinessDetails extends Component {
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
      content: '',
      star: '',
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
    this.props.fetchOneBusiness(this.props.match.params.id);
    this.props.fetchReviews(this.props.match.params.id);
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
    this.props.addReview(this.props.match.params.id, this.state).then(() => {
      this.setState({ content: '', star: '' });
      this.props.fetchReviews(this.props.match.params.id);
      alertify.set('notifier', 'position', 'top-right');
      alertify.success('Reviews Added');
    });
  }


  /**
   * @description render - renders the class component
   *
   * @return {object} returns an object
   *
   */
  render() {
    const { business, user, reviews } = this.props;
    const { id } = this.props.match.params;

    if (!business) {
      return <Loader/>;
    }

    const eachReview = reviews.map(review => (
      <ReviewCard
        id={review.id}
        key={review.id}
        content={review.content}
        star={review.star}
        reviewer={review.reviewer}
        userId={review.userId}
      />
    ));


    return (
      <div className="bg-cover details-page">
        <div className="container">
          <img
            className="my-4 card-img-top img-overlay business-image"
            src={business.Image === '' ? 'http://res.cloudinary.com/timi/image/upload/v1527336718/jmkhsmzsjlyp5xk4rfbe.jpg' : business.Image}
            alt=""
          />
          <div className="row">
            <div className="col-sm-8">
              <div className="row">
                <div className="col-3">
                  <img className="category-image" src="/img/wine.jpg" alt="" />
                </div>
                <div className="col-9">
                  <h3 className="row my-1">{business.name}</h3>
                  <p className="row">{ stars(averageReviews(reviews)) }</p>
                  <p className="row light-color">{business.category}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 my-2 details-button">
              <button className="btn btn-danger mr-1 mt-1" href="#write_review"><i className="far fa-star" /> Write a review</button>
              <button className="btn btn-light mr-1 mt-1"><i className="fas fa-heart text-danger" /> Save</button>
              <button className="btn btn-light mr-1 mt-1"><i className="fas fa-share-alt" /> Share</button>
            </div>
          </div>

          <div className="row my-4">
            <div className="col-md-9 mb-4">
              <div className="content-box mb-4">
                <p className="">{business.details}</p>
              </div>
              <div className="content-box">
                <h4>Reviews & Tips</h4>
              </div>
              <div className="review-list mb-4">
                <div className="">
                  {eachReview}
                </div>
              </div>
              <div className="content-box">
                <h4>Rate and Write a Review</h4>
              </div>
              <div className="content-box" id="write_review">
                <form onSubmit={this.onSubmit}>
                  <p>Select your rating</p>
                  <select
                    id="inputState"
                    className="form-control mb-2"
                    value={this.state.star}
                    onChange={this.onChange}
                    name="star"
                  >
                    <option value="" disabled>choose star</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Help others choose perfect place"
                    type="text"
                    required
                    value={this.state.content}
                    onChange={this.onChange}
                    name="content"
                  />
                  <button className="btn btn-dark my-3">Submit review</button>
                </form>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="content-box mb-4">
                <div id="map" className="mb-4">
                  <img className="" src="/img/mapIkaja.jpg" alt="Google Map of ikeja lagos" />
                </div>
                <div className="contact-details ml-3">
                  <p><i className="fas fa-map-marker-alt" /> {business.location}</p>
                  <p><i className="fas fa-phone" /> +2348135585366</p>
                  <p><i className="far fa-clock" /> Open till 6:00pm</p>
                  <p><i className="fas fa-globe" /> weconnect.com</p>
                </div>
              </div>
              <div className="content-box contact-box mb-4">
                <h3>Contact Us</h3>
                <form action="">
                  <input type="text" placeholder="Name" className="form-control mb-2" />
                  <input type="text" placeholder="Email" className="form-control mb-2" />
                  <textarea type="text" placeholder="Message" className="form-control mb-2" />
                  <button type="submit" className="btn btn-dark form-control">Submit </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    business: state.oneBusiness.oneBusiness,
    user: state.userReducer.signedInUser.id,
    reviews: state.allReviews.allReviews,
  };
}

BusinessDetails.propTypes = {
  fetchOneBusiness: PropTypes.func.isRequired,
  addReview: PropTypes.func.isRequired,
  fetchReviews: PropTypes.func.isRequired,
  deleteOneBusiness: PropTypes.func.isRequired
};

export default connect(mapStateToProps, {
  fetchOneBusiness, deleteOneBusiness, fetchReviews, addReview
})(BusinessDetails);
