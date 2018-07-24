import React, { Component } from 'react';
import PropTypes from 'prop-types';
import alertify from 'alertifyjs';
import AddBusinessForm from '../components/AddBusinessForm';
import { addOneBusiness } from '../actions/businessAction';


/**
 * @class AddBusiness
 *
 * @classdesc Add Business
 *
 */
export class AddBusiness extends Component {
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
      name: '',
      location: '',
      category: '',
      details: '',
      errors: '',
      businessImage: '',
      imagePreview: '',

    };
    const { onChange, onSubmit, onFileChange } = this;
    this.onChange = onChange.bind(this);
    this.onSubmit = onSubmit.bind(this);
    this.onFileChange = onFileChange.bind(this);
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
    const { context, setState, state } = this;
    const {
      name, location, category, details, businessImage,
    } = state;
    event.preventDefault();

    const businessInfo = {
      name,
      location,
      category,
      details,
      Image: businessImage,
    };

    const registerBusiness = new FormData();

    const businessInfoKeys = Object.keys(businessInfo);
    businessInfoKeys.forEach((key) => {
      registerBusiness.append(key, businessInfo[key]);
    });

    addOneBusiness(registerBusiness).then(
      () => {
        context.router.history.push('/businesses');
        alertify.set('notifier', 'position', 'top-right');
        alertify.success('Business Added');
      },
      ({ response }) => {
        setState({ errors: response.data.message });
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
      onChange, onSubmit, onFileChange, state
    } = this;
    const {
      name, location, category, details, businessImage, imagePreview
    } = state;
    return (
      <div>
        <div className="container py-5 add-business">
          <AddBusinessForm
            name={name}
            location={location}
            category={category}
            details={details}
            businessImage={businessImage}
            imagePreview={imagePreview}
            onChange={onChange}
            onSubmit={onSubmit}
            onFileChange={onFileChange}
          />
        </div>
      </div>
    );
  }
}

AddBusiness.contextTypes = {
  router: PropTypes.object.isRequired
};


export default AddBusiness;
