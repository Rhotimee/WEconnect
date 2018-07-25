import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import alertify from 'alertifyjs';
import { fetchBusinesses, setSearch } from '../actions/businessAction';
import ListBusiness2 from '../components/BusinessListItem2';

/**
 * @class LoginForm
 *
 * @classdesc logs in user
 *
 */
class LandingPage extends Component {
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
      errors: {}
    };

    const { onChange, onSubmit } = this;
    this.onChange = onChange.bind(this);
    this.onSubmit = onSubmit.bind(this);
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

    const {
      text, type, page, errors
    } = this.state;

    this.props.setSearch({ search: text, type });

    this.props.fetchBusinesses(page, type, text)
      .then(
        () => {
          this.context.router.history.push('/businesses');
        },
        ({ response }) => {
          this.setState({ errors: response.data.message });
          alertify.set('notifier', 'position', 'top-right');
          alertify.error(errors);
        }
      );
  }

  /**
   * @description onCLick
   *
   * @param  {text}  text
   *
   * @returns {object} returns business object
   */
  onClick(text) {
    this.props.setSearch({ search: text, type: 'category' });

    this.props.fetchBusinesses(this.state.page, 'category', text)
      .then(
        () => {
          this.context.router.history.push('/businesses');
        },
        ({ response }) => {
          this.setState({ errors: response.data.message });
          alertify.set('notifier', 'position', 'top-right');
          alertify.error(this.state.errors);
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

    const eachBusiness = this.props.data.businesses.rows.slice(1).slice(-3).map((business) => {
      const {
        id, Image, category, location, name, reviews
      } = business;
      if (reviews === undefined) {
        return reviews === [];
      }
      return (
        <ListBusiness2
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

    const {
      text
    } = this.state;

    const { onChange } = this;

    return (
      <div>
        <div className="cover-img">
          <div className="cover-overlay">
            <div className="container justify-content-center pt-5 content">
              <div className="heading mt-5">
                <h1 className="text-center">Discover places that people love</h1>
                <h4 className="text-center lead mb-3">Find the best places to eat,
          drink, shop, or visit in any city in the world.
                </h4>
              </div>

              <form action="" className="justify-content-center p-3 mx-4 search-form" onSubmit={this.onSubmit}>
                <div className="row">
                  <div className="col-md-6 px-1 my-1">
                    <input
                      name="text"
                      type="text"
                      className="b-name form-control form-control-lg"
                      placeholder="I'm looking for..."
                      value={text}
                      onChange={onChange}
                    />
                  </div>
                  <div className="col-md-4 px-1 my-1">
                    <div className="">
                      <select
                        className="form-control form-control-lg"
                        onChange={onChange}
                        name="type"
                      >
                        <option defaultValue>Choose...</option>
                        <option id="search-location" value="location">Location</option>
                        <option value="category">Category</option>

                      </select>
                    </div>
                  </div>
                  <div className="col-md-2 px-1 my-1">
                    <button
                      className="form-control form-control-lg btn-outline-light search"
                      type="submit"
                      id="landing-input-button"
                    >
                      <i className="fas fa-search" />
                      Search
                    </button>
                  </div>
                </div>
              </form>

              <div className="row text-white text-center justify-content-center pt-4 pb-5">
                <div
                  className="category-item"
                  onClick={() => this.onClick('restaurant')}
                >
                  <ion-icon name="restaurant" />
              Resturants
                </div>
                <div
                  className="category-item"
                  onClick={() => this.onClick('professional')}
                >
                  <ion-icon name="briefcase" />
              Professional
                </div>
                <div
                  className="category-item"
                  onClick={() => this.onClick('nightlife')}
                >
                  <ion-icon name="wine" />
              Nightlife
                </div>
                <div
                  className="category-item"
                  onClick={() => this.onClick('shopping')}
                >
                  <ion-icon name="cart" />
              Shopping
                </div>
              </div>


            </div>


          </div>
        </div>

        <div className="container top-picks">

          <div className="text-center my-5">
            <h2>Top Picks</h2>
            <p>List of featured businesses for the week.</p>
          </div>

          <div className="row my-5 justify-content-center">
            { eachBusiness }
          </div>

        </div>

        <div id="carouselExampleControls" className="carousel slide text-center bg-review recent-reviews" data-ride="carousel">
          <div className="container text-light">
            <h2 className="mb-3">Reviews</h2>
            <div className="carousel-inner ">
              <div className="carousel-item active">
                <p>
                It is exciting to have a business site that gives business owners
                the opportunity to showcase their products and services
                to the world at large at no cost.
                </p>
                <footer className="blockquote-footer text-light"> Timi Web </footer>
              </div>
              <div className="carousel-item">
                <p>
                Very impressive site I must say. And with its easy to navigate features,
                I dare say that, in the nearest future, Weconnect will
                rank amongst the biggest Business Search Sites in the
                globe. Just keep improving!
                </p>
                <footer className="blockquote-footer text-light"> Banjoj Limited </footer>
              </div>
              <div className="carousel-item">
                <p>
                I thank you Weconnect as it has allowed me to post and
                showcase what i do to the world. Its a gradual process
                and it takes a while for people to get to know and see what
                you post, but once they do, the traffic will start flowing in...
                I appreciate the opportunity given to me to share
                my music on Weconnect. Nice one.
                </p>
                <footer className="blockquote-footer text-light"> Qwerty Known </footer>
              </div>
            </div>
          </div>

          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>

        <div className="container top-picks">

          <div className="text-center my-5">
            <h2>Chose Category You Want</h2>
          </div>

          <div className="row my-5 justify-content-center" id="cate-g">
            <div
              className="card"
              onClick={() => this.onClick('restaurant')}
            >
              <img className="card-img-top img-overlay" src="/img/restaurant.jpg" alt="" />
              <div className="card-body text-dark bg-light">
                <p className="card-text">Resturant</p>
              </div>
            </div>

            <div
              className="card"
              onClick={() => this.onClick('professional')}
            >
              <img className="card-img-top img-overlay" src="/img/corporate.jpg" alt="" />
              <div className="card-body text-dark bg-light">
                <p className="card-text">Professional</p>
              </div>
            </div>


            <div
              className="card"
              onClick={() => this.onClick('nightlife')}
            >
              <img className="card-img-top img-overlay" src="/img/drinks.jpg" alt="" />
              <div className="card-body text-dark bg-light">
                <p className="card-text">Nightlife</p>
              </div>
            </div>

            <div
              className="card"
              onClick={() => this.onClick('shopping')}
            >
              <img className="card-img-top img-overlay" src="/img/shopping.jpg" alt="" />
              <div className="card-body text-dark bg-light">
                <p className="card-text">Shopping</p>
              </div>
            </div>


          </div>
        </div>
      </div>
    );
  }
}

LandingPage.propTypes = {
  setSearch: PropTypes.func.isRequired,
  fetchBusinesses: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
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
  };
}

LandingPage.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { fetchBusinesses, setSearch })(LandingPage);
