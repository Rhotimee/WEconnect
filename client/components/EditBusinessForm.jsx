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

    const {
      name, location, category, details, Image
    } = this.props.business;

    //  update the state with the data coming from the store.
    this.state = {
      name,
      location,
      category,
      details,
      errors: {},
      businessImage: '',
      imagePreview: Image

    };

    const { onChange, onSubmit, onFileChange } = this;

    this.onChange = onChange.bind(this);
    this.onSubmit = onSubmit.bind(this);
    this.onFileChange = onFileChange.bind(this);
  }

  // onChange updates the state with the value of the input
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

  // onFile chnage enables us read the uploaded image and preview it.
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

    const { context, props, state } = this;
    const {
      name, location, category, details, businessImage
    } = state;
    const businessInfo = {
      name,
      location,
      category,
      details,
      Image: businessImage
    };

    const updateBusiness = new FormData();

    const businessInfoKeys = Object.keys(businessInfo);
    businessInfoKeys.forEach((key) => {
      updateBusiness.append(key, businessInfo[key]);
    });

    const { updateOneBusiness, business } = props;
    const { id } = business;
    updateOneBusiness(id, updateBusiness).then(
      () => {
        context.router.history.push(`/businesses/${id}`);
        alertify.set('notifier', 'position', 'top-right');
        alertify.success('Business Updated Successfully');
      },
      ({ response }) => {
        this.setState({ errors: response.data.message });
        alertify.set('notifier', 'position', 'top-right');
        alertify.error(state.errors);
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
    const {
      name, category, details, location, number, state, imagePreview
    } = this.state;
    const { onChange, onSubmit, onFileChange } = this;

    return (
      <form className="row" onSubmit={onSubmit} >
        <div className="form-group col-sm-6">
          <label htmlFor="text">Buisness Name <small>*</small> </label>
          <input
            type="text"
            className="form-control"
            placeholder="Andela"
            required
            value={name}
            onChange={onChange}
            name="name"
          />
        </div>
        <div className="form-group col-sm-6">
          <label htmlFor="inputcategory">Business Category <small>*</small> </label>
          <select
            id="inputcategory"
            className="form-control"
            value={category}
            onChange={onChange}
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
            value={details}
            onChange={onChange}
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
            value={location}
            onChange={onChange}
            name="location"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="number">Business Phone Number</label>
          <input
            type="number"
            className="form-control"
            placeholder="+2348000000000"

            value={number}
            onChange={onChange}
            name="number"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputState">State <small>*</small> </label>
          <select
            id="inputState"
            className="form-control"
            value={state}
            onChange={onChange}
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
              onChange={onFileChange}
              name="businessImage"
              accept="image/*"
            />
          </div>

          <div className="col-md-4 mb-2 ">
            <img className="" src={imagePreview} alt="" />
          </div>
        </div>

        <p className="col-12">Fields with <small>*</small> are required </p>

        <button type="submit" className="m-3 col-md-2 btn btn-dark mb-5">Submit</button>
      </form>
    );
  }
}

EditBusinessForm.propTypes = {
  business: PropTypes.object.isRequired,
};

EditBusinessForm.contextTypes = {
  router: PropTypes.object.isRequired
};

export default EditBusinessForm;
