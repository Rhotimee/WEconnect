import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchOneUser } from '../actions/userActions';
import ListBusiness from '../components/BusinessListItem';
import ReviewCard from '../components/ReviewCard';

/**
 * @class Dasboard
 *
 * @classdesc Dashboard
 *
 */
export class Dashboard extends Component {
  /**
   * @description componentDidMount
   *
   * @returns {void}
   */
  componentDidMount() {
    this.props.fetchOneUser(this.props.match.params.id);
  }

  /**
   * @description render - renders the class component
   *
   * @return {object} returns an object
   *
   */
  render() {
    const { user, authUser } = this.props;

    if (!user) {
      return <p>loading...</p>;
    }

    const eachBusiness = user.businesses.map((business) => {
      const {
        id, Image, category, location, name
      } = business;
      return (
        <ListBusiness
          key={id}
          Image={Image}
          id={id}
          category={category}
          location={location}
          name={name}
        />
      );
    });

    const eachReview = user.reviews.map((review) => {
      const {
        id, content, star, reviewer, userId, businessId
      } = review;
      return (
        <ReviewCard
          id={id}
          key={id}
          content={content}
          star={star}
          reviewer={reviewer}
          userId={userId}
          businessId={businessId}
        />
      );
    });

    const {
      Image, firstName, businesses, reviews, lastName,
    } = user;

    return (
      <div>
        <div className="container">
          <div className="row my-4 user-profile p-4">
            <div className="col-md-2">
              <img src={Image || '/img/user1.jpg'} alt="" />
            </div>
            <div className="col-md-6 mx-4">
              <h4>{firstName} {lastName}</h4>
              <p>{businesses.length} {businesses.length > 1 ? 'Listed Businesses' : 'Listed Business' }</p>
              <p>{reviews.length} {reviews.length > 1 ? 'reviews' : 'review' }</p>
              {
          user.id === authUser ?
            <Link to={`/user/${authUser}/update`} className="btn btn-outline-dark">Edit</Link>
          : null
        }
            </div>
            <div className="col-md-3 user-social-links">
              <i className="fab fa-facebook-f mx-3" />
              <i className="fab fa-twitter mx-3" />
              <i className="fab fa-google-plus-g mx-3" />
            </div>
          </div>
        </div>

        <div className="container py-4">
          <div className="row profile mb-5">
            <div className="col-md-3">
              <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a
                  className="nav-link active"
                  id="v-pills-home-tab"
                  data-toggle="pill"
                  href="#v-pills-home"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >Businesses
                </a>
                <a
                  className="nav-link"
                  id="v-pills-profile-tab"
                  data-toggle="pill"
                  href="#v-pills-profile"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >Reviews
                </a>
              </div>
            </div>
            <div className="col-md-9">
              <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">

                  <div className="container">
                    {businesses.length > 0 ? eachBusiness : 'No Business Found'}
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">

                  <div className="review-list mb-4">
                    <div className="">
                      { reviews.length > 0 ? eachReview : 'No Review Found' }
                    </div>

                  </div>
                </div>
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
    user: state.oneUser.oneUser,
    authUser: state.userReducer.signedInUser.id,
  };
}

Dashboard.propTypes = {
  fetchOneUser: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  authUser: PropTypes.number.isRequired
};

export default connect(mapStateToProps, { fetchOneUser })(Dashboard);
