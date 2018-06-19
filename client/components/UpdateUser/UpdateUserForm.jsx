import React, { Component } from 'react';
import PropTypes from 'prop-types';
import alertify from 'alertifyjs';

/**
 * @class LoginForm
 *
 * @classdesc logs in user
 *
 */
class UpdateUserForm extends Component {
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

    const { user } = this.props;

    this.state = {
      firstName: user.firstName,
      lastName: user.lastName,
      errors: '',
      Image: '',
      imagePreview: user.Image
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
            Image: file
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

    const userInfo = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      Image: this.state.Image,
    };

    const registerUser = new FormData();

    const userInfoKeys = Object.keys(userInfo);
    userInfoKeys.forEach((key) => {
      registerUser.append(key, userInfo[key]);
    });

    this.props.updateUserDetails(this.props.user.id, registerUser).then(
      () => {
        this.context.router.history.push(`/user/${this.props.user.id}`);
        alertify.set('notifier', 'position', 'top-right');
        alertify.success('Profile Updated Successfully');
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
      <form onSubmit={this.onSubmit}>
        <p className="col-12 my-3">Fields with <small>*</small> are required </p>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="First Name *"
            value={this.state.firstName}
            onChange={this.onChange}
            name="firstName"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Last Name *"
            value={this.state.lastName}
            onChange={this.onChange}
            name="lastName"
            required
          />
        </div>

        <div>
          <img src={this.state.imagePreview} alt="" />
        </div>

        <div className="form-group">
          <label htmlFor="filefield">User Image</label>
          <input
            type="file"
            className="form-control-file"
            id="filefield"
            onChange={this.onFileChange}
            name="Image"
            accept="image/*"
          />
        </div>

        <input
          type="submit"
          className="btn btn-outline-dark btn-block"
        />
      </form>
    );
  }
}

UpdateUserForm.contextTypes = {
  router: PropTypes.object.isRequired
};

export default UpdateUserForm;
