import React, { Component } from 'react';
import PropTypes from 'prop-types';
import alertify from 'alertifyjs';


/**
 * @class BusinessDetails
 *
 * @classdesc Details of business
 *
 */
class EditBusinessForm extends Component {
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

    const { business } = this.props;

    this.state = {
      name: business.name,
      location: business.location,
      category: business.category,
      details: business.details,
      errors: {},
      businessImage: '',
      imagePreview: business.Image

    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
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
  onFileChange(event) {
    const file = event.target.files[0];

    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    if (file) {
      fileReader.onload = () => {
        const newImage = new Image();
        newImage.src = fileReader.result;
        newImage.onload = () => {
          this.setState({
            imagePreview: newImage.src,
            businessImage: file
          });
        };
      };
    }
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

    const businessInfo = {
      name: this.state.name,
      location: this.state.location,
      category: this.state.category,
      details: this.state.details,
      Image: this.state.businessImage
    };

    const updateBusiness = new FormData();

    const businessInfoKeys = Object.keys(businessInfo);
    businessInfoKeys.forEach((key) => {
      updateBusiness.append(key, businessInfo[key]);
    });

    const { id } = this.props.business;
    this.props.updateOneBusiness(id, updateBusiness).then(
      () => {
        this.context.router.history.push(`/businesses/${id}`);
        alertify.set('notifier', 'position', 'top-right');
        alertify.success('Business Updated Successfully');
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
      <form className="row" onSubmit={this.onSubmit} >
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
            <option value="" disabled>choose category</option>
            <option>Resturant</option>
            <option>Professional</option>
            <option>Nightlife</option>
            <option>Shopping</option>
            <option>Others</option>
          </select>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputAddress">Business Details <small>*</small></label>
          <textarea
            id="bizdetails"
            placeholder="lorem ipsum"
            required
            value={this.state.details}
            onChange={this.onChange}
            name="details"
            className="form-control"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputCity">Location <small>*</small> </label>
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

        <div className="row mx-1">
          <div className="form-group col-md-6 mb-3">
            <input
              type="file"
              className="form-control-file"
              id="filefield"
              onChange={this.onFileChange}
              name="businessImage"
              accept="image/*"
            />
          </div>

          <div className="col-md-4 mb-2 ">
            <img className="" src={this.state.imagePreview} alt="" />
          </div>
        </div>

        <p className="col-12">Fields with <small>*</small> are required </p>

        <button type="submit" className="m-3 col-md-2 btn btn-dark mb-5">Submit</button>
      </form>
    );
  }
}

EditBusinessForm.contextTypes = {
  router: PropTypes.object.isRequired
};

export default EditBusinessForm;
