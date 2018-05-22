import React, { Component } from 'react';
import NavFoot from './NavFoot';
import { connect } from 'react-redux';
import { fetchOneBusiness, deleteOneBusiness } from '../actions/businessAction';
import { fetchReviews, addReview } from '../actions/reviewsAction';
import { Link } from 'react-router-dom';
import EditBusiness from './EditBusinessForm';
import ReviewCard from './ReviewCard';


class BusinessDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      star: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    this.props.fetchOneBusiness(this.props.match.params.id);
    this.props.fetchReviews(this.props.match.params.id);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    // this.setState({ errors: {}, isLoading: true });
    this.props.addReview(this.props.match.params.id, this.state)
    
    
  }


  render() {
    const { business, user, reviews } = this.props;
    const { id } = this.props.match.params;


    if (!business) {
      return <h2>Loading...</h2>;
    }

    const eachReview = reviews.map(review => (
      <ReviewCard
        id={review.id}
        key={review.id}
        content={review.content}
        star={review.star}
        reviewer={review.reviewer}
      />
    ));


    return (
      <div className="bg-cover">
        <NavFoot>
          <div className="container mt-4 mb-4" id="business-detail">
            <div className="row">

              <div className="card col px-0">
                <img className="card-img-top img-overlay" src="img/bg3.jpg" alt="" height="300px;" />
                <div className="card-img-overlay ">
                  <a className="h1 text-white card-title" href="business-detail.html">{business.name}</a>
                </div>

                <div className="card-body text-dark bg-light">
                  <div className="data">
                    <div className="row data1 ml-1">
                      <div className="p-1">
                        <img src="img/bg3.jpg" alt="" height="75px" width="120px" />
                      </div>
                      <div className="p-1">
                        <h3 className="">Restaurant</h3>
                        <p><i className="fa fa-map-marker" /> Ikeja</p>
                      </div>
                    </div>

                    {
                  business.userId === user ? <div>
                    <Link to={`/businesses/${id}/edit`}>edit</Link>
                    -
                    <Link to="/businesses" onClick={() => { this.props.deleteOneBusiness(id); }} >delete</Link>
                  </div>
                : null
              }

                    <div className="row data2 mt-3 ml-4">
                      <button className="btn btn-outline-dark mr-2 like"> Like <i className="fa fa-heart" /></button>
                      <button className="btn btn-outline-dark mr-1 share">
                      Share
                        <i className="fa fa-facebook" />
                        <i className="fa fa-twitter" />
                        <i className="fa fa-envelope" />
                      </button>
                    </div>

                  </div> {/** end data * */}

                  <div className="row mt-2">
                    <p className="col-md-6">
                      {business.details}
                    </p>
                    <img className="col-md-6" width="500" src="https://maps.googleapis.com/maps/api/staticmap?center=ikeja+lagos&zoom=13&scale=2&size=600x50&maptype=roadmap&format=png&visual_refresh=true&markers=size:small%7Ccolor:0xff682e%7Clabel:1%7Cikeja+lagos" alt="Google Map of ikeja lagos" />
                  </div>

                  <div className="review">
                    <hr className="straight" />
                    <div className="row">
                      <div className="col star">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <span className="rate">5.0</span>
                      (2 Reviews)
                      </div>
                      <div className="col like">
                      5 likes <i className="fa fa-heart" />
                      </div>
                      <div className="col">
                        <i className="fa fa-users" />
                      152 Visits
                      </div>
                      <div className="col text-right">
                        <button className="btn btn-outline-dark" data-toggle="modal" data-target="#addReview">
                      Write a review
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Reviews */}
                  <hr className="straight" />
                  <div className="all-reviews">

                    { eachReview }

                  </div>
                </div> {/** end card-body * */}

              </div>
            </div>
          </div>
        </NavFoot>

        {/* Modal for Adding Reviews */}
        <div className="modal fade" id="addReview" >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header bg-dark text-white">
                <h5 className="modal-title">Add Review</h5>
                <button className="close" data-dismiss="modal"  id="dismiss-submit"><span>&times;</span></button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.onSubmit}>
                  <p>Fields with <small>*</small> are required</p>
                  <div className="form-group">
                    <label htmlFor="title">Review <small>*</small> </label>
                    <textarea
                      type="text"
                      className="form-control"
                      required
                      value={this.state.content}
                      onChange={this.onChange}
                      name="content"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputState">Star <small>*</small> </label>
                    <select
                      id="inputState"
                      className="form-control"
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
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-outline-dark" type="submit">Submit</button>
                  </div>
                </form>
              </div>
              
            </div>
          </div>
        </div>


      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    business: state.oneBusiness.oneBusiness,
    user: state.user_reducer.signedInUser.id,
    reviews: state.allReviews.allReviews,
  };
}


export default connect(mapStateToProps, {
  fetchOneBusiness, deleteOneBusiness, fetchReviews, addReview
})(BusinessDetails);
