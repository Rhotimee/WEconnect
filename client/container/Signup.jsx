import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import alertify from 'alertifyjs';
import { userSignupRequest } from '../actions/userActions';
import SignupForm from '../components/SignupForm';

/**
 * @class LoginForm
 *
 * @classdesc logs in user
 *
 */
export class Signup extends Component {
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
      errors: null,
      Image: '',
      imagePreview: '',
      isLoading: false
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
        this.setState({ isLoading: true });
        this.context.router.history.push('/');
        alertify.set('notifier', 'position', 'top-right');
        alertify.success('Signed up  Successfully');
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
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      imagePreview,
      isLoading
    } = this.state;
    const { onChange, onSubmit, onFileChange } = this;
    return (

      <SignupForm
        firstName={firstName}
        lastName={lastName}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        imagePreview={imagePreview}
        onChange={onChange}
        onSubmit={onSubmit}
        onFileChange={onFileChange}
        isLoading={isLoading}
      />


    );
  }
}

Signup.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
};

Signup.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(null, { userSignupRequest })(Signup);
