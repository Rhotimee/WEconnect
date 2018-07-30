import React, { Component } from 'react';
import PropTypes from 'prop-types';
import alertify from 'alertifyjs';

/**
 * @class LoginForm
 *
 * @classdesc logs in user
 *
 */
export class UpdateUserForm extends Component {
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

    const {
      firstName, lastName, email, password, Image
    } = this.state;

    const userInfo = {
      firstName,
      lastName,
      email,
      password,
      Image,
    };

    const registerUser = new FormData();

    const userInfoKeys = Object.keys(userInfo);
    userInfoKeys.forEach((key) => {
      registerUser.append(key, userInfo[key]);
    });

    const {
      props, context, setState, state
    } = this;

    props.updateUserDetails(props.user.id, registerUser).then(
      () => {
        context.router.history.push(`/user/${props.user.id}`);
        alertify.set('notifier', 'position', 'top-right');
        alertify.success('Profile Updated Successfully');
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
    const { onSubmit, onChange, onFileChange } = this;
    const { firstName, lastName, isLoading } = this.state;
    return (
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="First Name *"
            value={firstName}
            onChange={onChange}
            name="firstName"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Last Name *"
            value={lastName}
            onChange={onChange}
            name="lastName"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="file"
            className="form-control-file"
            id="filefield"
            onChange={onFileChange}
            name="Image"
            accept="image/*"
          />
        </div>
        <input disabled={isLoading} type="submit" className="btn btn-outline-dark btn-block" />
      </form>
    );
  }
}

UpdateUserForm.contextTypes = {
  router: PropTypes.object.isRequired
};

UpdateUserForm.propTypes = {
  user: PropTypes.object.isRequired,
};


export default UpdateUserForm;
