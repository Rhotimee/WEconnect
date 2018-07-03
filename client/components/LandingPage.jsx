import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import alertify from 'alertifyjs';
import { fetchBusinesses, setSearch } from '../actions/businessAction';

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
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
    // this.props.setSearch(event.target.value);
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

    this.props.setSearch({ search: this.state.text, type: this.state.type });
    // this.setState({ errors: {}, isLoading: true });
    this.props.fetchBusinesses(this.state.type, this.state.text)
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
                      value={this.state.text}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="col-md-4 px-1 my-1">
                    <div className="">
                      <select
                        className="form-control form-control-lg"
                        onChange={this.onChange}
                        name="type"
                      >
                        <option defaultValue>Choose...</option>
                        <option value="location">Location</option>
                        <option value="category">Category</option>

                      </select>
                    </div>
                  </div>
                  <div className="col-md-2 px-1 my-1">
                    <button className="form-control form-control-lg btn-outline-light search" type="submit"> <i className="fas fa-search" />  Search</button>
                  </div>
                </div>
              </form>

              <div className="row text-white text-center justify-content-center pt-4 pb-5">
                <div className="category-item">
                  <ion-icon name="restaurant" />
              Resturants
                </div>
                <div className="category-item">
                  <ion-icon name="briefcase" />
              Professional
                </div>
                <div className="category-item">
                  <ion-icon name="wine" />
              Nightlife
                </div>
                <div className="category-item">
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
            <p>List of trending businesses for the week.</p>
          </div>

          <div className="row my-5 justify-content-center">
            <div className="card col-md-3 px-0 m-3">
              <img className="card-img-top img-overlay" src="/img/drones.jpg" alt="" />
              <div className="card-body text-dark bg-light">
                <p className="card-text">Drone Naija</p>
                <div className="star">
        3.0
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>

            <div className="card col-md-3 px-0 m-3">
              <img className="card-img-top img-overlay" src="/img/fish.jpg" alt="" />
              <div className="card-body text-dark bg-light">
                <p className="card-text">Bella Fish</p>
                <div className="star">
        3.0
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>


            <div className="card col-md-3 px-0 m-3">
              <img className="card-img-top img-overlay" src="/img/photo.jpeg" alt="" />
              <div className="card-body text-dark bg-light">
                <p className="card-text">Dokun Photos</p>
                <div className="star">
        3.0
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>

          </div>

        </div>

        <div id="carouselExampleControls" className="carousel slide text-center bg-review recent-reviews" data-ride="carousel">
          <div className="container">
            <h2 className="mb-3">Recent Reviews</h2>
            <div className="carousel-inner ">
              <div className="carousel-item active">
                <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto reprehenderit cupiditate modi eos, numquam magni enim sapiente unde laboriosam quas animi et totam nam tempora perspiciatis natus facilis eveniet maxime officiis fuga in aperiam molestiae laborum. Velit itaque vel quia non veritatis fuga ratione quis, ipsa sit, dolores, corrupti provident.
                </p>
              </div>
              <div className="carousel-item">
                <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto reprehenderit cupiditate modi eos, numquam magni enim sapiente unde laboriosam quas animi et totam nam tempora perspiciatis natus facilis eveniet maxime officiis fuga in aperiam molestiae laborum. Velit itaque vel quia non veritatis fuga ratione quis, ipsa sit, dolores, corrupti provident.
                </p>
              </div>
              <div className="carousel-item">
                <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto reprehenderit cupiditate modi eos, numquam magni enim sapiente unde laboriosam quas animi et totam nam tempora perspiciatis natus facilis eveniet maxime officiis fuga in aperiam molestiae laborum. Velit itaque vel quia non veritatis fuga ratione quis, ipsa sit, dolores, corrupti provident.
                </p>
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
            <div className="card">
              <img className="card-img-top img-overlay" src="/img/restaurant.jpg" alt="" />
              <div className="card-body text-dark bg-light">
                <p className="card-text">Resturant</p>
              </div>
            </div>

            <div className="card">
              <img className="card-img-top img-overlay" src="/img/corporate.jpg" alt="" />
              <div className="card-body text-dark bg-light">
                <p className="card-text">Professional</p>
              </div>
            </div>


            <div className="card">
              <img className="card-img-top img-overlay" src="/img/drinks.jpg" alt="" />
              <div className="card-body text-dark bg-light">
                <p className="card-text">Nightlife</p>
              </div>
            </div>

            <div className="card">
              <img className="card-img-top img-overlay" src="/img/shopping.jpg" alt="" />
              <div className="card-body text-dark bg-light">
                <p className="card-text">Shopping</p>
              </div>
            </div>


          </div>
        </div>
      </div>


    // <div className="cover">
    //   <div className="cover-overlay">

    //     <div className="container justify-content-center pt-5 content">

    //       <div className="heading">
    //         <h1 className="text-center">WECONNECT</h1>
    //         <h4 className="text-center">Find the best places to eat,
    //         drink, shop, or visit in any city in the world.
    //         Access over 5 million local businesses.
    //         </h4>
    //       </div>

    //       <form action="" className="justify-content-center p-3 mx-4" onSubmit={this.onSubmit}>
    //         <div className="row">
    //           <div className="col-md-6 px-1 my-1">
    //             <input
    //               name="text"
    //               type="text"
    //               className="b-name form-control form-control-lg"
    //               placeholder="I'm looking for..."
    //               value={this.state.text}
    //               onChange={this.onChange}
    //             />
    //           </div>
    //           <div className="col-md-4 px-1 my-1">
    //             <div className="input-group">
    //               <div className="input-group-prepend">
    //                 <span className="input-group-text bg-light" id="basic-addon1"> <i className="fa fa-map-marker" /> </span>
    //               </div>
    //               <select
    //                 className="form-control form-control-lg"
    //                 onChange={this.onChange}
    //                 name="type"
    //               >
    //                 <option defaultValue>Choose...</option>
    //                 <option value="location">Location</option>
    //                 <option value="category">Category</option>

    //               </select>
    //             </div>
    //           </div>
    //           <div className="col-md-2 px-1 my-1">
    //             <button className="form-control form-control-lg btn-outline-light search" type="submit"> <i className="fa fa-search search-icon" />  Search</button>
    //           </div>
    //         </div>
    //       </form>

    //       <div className="row text-white text-center justify-content-center pt-4 mb-5 ">
    //         <div className="category-item py-4 m-2">
    //           <i className="fa fa-cutlery d-block mb-2" aria-hidden="true" />
    //         Food
    //         </div>
    //         <div className="category-item py-4 m-2">
    //           <i className="fa fa-wrench d-block mb-2" aria-hidden="true" />
    //         Repair
    //         </div>
    //         <div className="category-item py-4 m-2">
    //           <i className="fa fa-heartbeat d-block mb-2" aria-hidden="true" />
    //         Health
    //         </div>
    //         <div className="category-item py-4 m-2">
    //           <i className="fa fa-check-circle d-block mb-2" aria-hidden="true" />
    //         Events
    //         </div>
    //       </div>

    //     </div>

    //   </div>
    // </div>
    );
  }
}

LandingPage.propTypes = {
  setSearch: PropTypes.func.isRequired,
  fetchBusinesses: PropTypes.func.isRequired,
};

LandingPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(null, { fetchBusinesses, setSearch })(LandingPage);
