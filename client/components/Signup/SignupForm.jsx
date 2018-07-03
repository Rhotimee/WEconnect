import React, { Component } from 'react';
import PropTypes from 'prop-types';
import alertify from 'alertifyjs';


/**
 * @class SignupForm
 *
 * @classdesc signup user
 *
 */
class SignupForm extends Component {
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
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: '',
      Image: '',
      imagePreview: ''
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

    this.props.userSignupRequest(registerUser).then(
      () => {
        this.context.router.history.push('/');
        alertify.set('notifier', 'position', 'top-right');
        alertify.success('Signed up  Successfully');
      },
      ({ data }) => this.setState({ errors: data, isLoading: false })
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
        <div className="form-group">
          <input
            type="email"
            className="form-control form-control-lg"
            placeholder="Email"
            required
            value={this.state.email}
            onChange={this.onChange}
            name="email"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control form-control-lg"
            placeholder="Password *"
            required
            value={this.state.password}
            onChange={this.onChange}
            name="password"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control form-control-lg"
            placeholder="Confirm Password *"
            value={this.state.confirmPassword}
            onChange={this.onChange}
            name="confirmPassword"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="file"
            className="form-control-file"
            id="filefield"
            onChange={this.onFileChange}
            name="Image"
            accept="image/*"
          />
        </div>
        <input disabled={this.state.isLoading} type="submit" className="btn btn-outline-dark btn-block" />
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
};

SignupForm.contextTypes = {
  router: PropTypes.object.isRequired
};

export default SignupForm;
