import React, { Component } from 'react';
import { addOneBusiness } from '../actions/businessAction';
import PropTypes from 'prop-types';

class AddBusinessForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      location: '',
      category: '',
      details: '',
      confirmPassword: '',
      errors: {},
      isLoading: false,

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
    this.props.addOneBusiness(this.state).then(
      () => {
        this.context.router.history.push('/businesses');
      },
      ({ data }) => this.setState({ errors: data, isLoading: false })
    );
  }

  render() {
    return (


      <form className="row" onSubmit={this.onSubmit} >
        <p className="col-12">Fields with <small>*</small> are required </p>
        <div className="form-group col-sm-6">
          <label htmlFor="text">Buisness Name <small>*</small> </label>
          <input
            type="text"
            className="form-control"
            placeholder="Andela"
            required
            value={this.state.name}
            onChange={this.onChange}
            name="name"
          />
        </div>
        <div className="form-group col-sm-6">
          <label htmlFor="inputcategory">Business Category <small>*</small> </label>
          <select
            id="inputcategory"
            className="form-control"
            value={this.state.category}
            onChange={this.onChange}
            name="category"
          >
            <option>Repair & Services</option>
            <option>Events & Weddings</option>
            <option>Health & Wellness</option>
            <option>Professional Services</option>
            <option>Others</option>
          </select>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputAddress">Business Details <small>*</small></label>
          <textarea
            id="bizdetails"
                // cols="30"
                // rows="10"
            placeholder="lorem ipsum"
            required
            value={this.state.details}
            onChange={this.onChange}
            name="details"
            className="form-control"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputCity">City <small>*</small> </label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            placeholder="City"
            value={this.state.location}
            onChange={this.onChange}
            name="location"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="number">Business Phone Number</label>
          <input
            type="number"
            className="form-control"
            placeholder="+2348000000000"

            value={this.state.number}
            onChange={this.onChange}
            name="number"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputState">State <small>*</small> </label>
          <select
            id="inputState"
            className="form-control"
            value={this.state.state}
            onChange={this.onChange}
            name="state"
          >
            <option>Lagos</option>
            <option>Ogun</option>
          </select>
        </div>

        <div className="form-group col-md-6 mb-3">
          <label htmlFor="filefield">Business Image</label>
          <input type="file" className="form-control-file" id="filefield" />
        </div>
        <button type="submit" className="m-3 col-md-2 btn btn-dark mb-5">Submit</button>
      </form>
    );
  }
}

AddBusinessForm.contextTypes = {
  router: PropTypes.object.isRequired
};

export default AddBusinessForm;
