import React, { Component } from 'react';
import List_Business from './BusinessListItem';
import { connect } from 'react-redux';
import { fetchBusinesses } from '../../actions/businessAction';
import PropTypes from 'prop-types';


class BusinessList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      type: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }


  onSubmit(event) {
    event.preventDefault();
    // this.setState({ errors: {}, isLoading: true });
    this.props.fetchBusinesses(this.state.type, this.state.text)
      .then(() => { },);
  }


  componentDidMount() {
    this.props.fetchBusinesses(this.state.type, this.state.text);
  }


  render() {
    const eachBusiness = this.props.businesses.map(business => (
      <List_Business
        key={business.id}
        business={business}
      />
    ));

    return (
      <div className="bg-cover" >
        <div className="list-cover">

          <form
            action=""
            className="container bg-search py-5 sticky-top"
            onSubmit={this.onSubmit}
          >
            <div className="row mx-4 ">
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
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-light" id="basic-addon1"> <i className="fa fa-map-marker" /> </span>
                  </div>
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
                <button className="form-control form-control-lg btn-dark search" type="submit" onSubmit={this.onSubmit}> <i className="fa fa-search" />  Search</button>
              </div>
            </div>
          </form>

          <div className="mx-4"id="business-list">
            <div className="row justify-content-center">
              {eachBusiness}
            </div>
          </div>

        </div>
      </div>
    );
  }
}


BusinessList.contextTypes = {
  router: PropTypes.object.isRequired
};


function mapStateToProps(state) {
  return { businesses: state.Businesses.allBusinesses };
}

export default connect(mapStateToProps, { fetchBusinesses })(BusinessList);
