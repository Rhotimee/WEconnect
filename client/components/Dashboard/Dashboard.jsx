import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOneUser } from '../../actions/userActions';
import { Link } from 'react-dom';
import List_Business from '../BusinessList/BusinessListItem'
import ReviewCard from '../BusinessDetails/ReviewCard'

class Dashboard extends Component {

  componentWillMount(){
    this.props.fetchOneUser(this.props.match.params.id)
  }

  

  render() {
    const {user} = this.props 

    if (!user){
      return <p>loading...</p>
    }

    const eachBusiness = user.businesses.map(business => (
      <List_Business
        key={business.id}
        business={business}
      />
    ));

    const eachReview = user.reviews.map(review => (
      <ReviewCard
        id={review.id}
        key={review.id}
        content={review.content}
        star={review.star}
        reviewer={review.reviewer}
        userId={review.userId}
        businessId = {review.businessId}
      />
    ));

    return (
      <div>
        <p>{user.firstName}</p>
        <p>{user.lastName}</p>
        <p>{user.email}</p>
        <hr className="straight"/>
        
        <div className="mx-4"id="business-list">
          <div className="row justify-content-center">
            {user.businesses.length > 0 ? eachBusiness : 'No Business Found'}
          </div>
        </div>

        <div className="all-reviews">
          { eachReview }
        </div>

        <hr className="straight"/>




        
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.oneUser.oneUser
  }
}

export default connect(mapStateToProps, { fetchOneUser }) (Dashboard);