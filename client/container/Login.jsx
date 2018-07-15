import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import alertify from 'alertifyjs';
import LoginForm from '../components/loginForm';
import { userSigninRequest } from '../actions/userActions';


/**
 * @class Login
 *
 * @classdesc logs in user
 *
 */
class Login extends Component {
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
      email: '',
      password: '',
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
    this.props.userSigninRequest(this.state).then(
      () => {
        this.context.router.history.push('/');
        alertify.set('notifier', 'position', 'top-right');
        alertify.success('Logged In Successfully');
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
    const { email, password } = this.state;
    const { onChange, onSubmit } = this;
    return (

      <LoginForm
        email={email}
        password={password}
        onChange={onChange}
        onSubmit={onSubmit}
      />

    );
  }
}

Login.propTypes = {
  userSigninRequest: PropTypes.func.isRequired
};

Login.contextTypes = {
  router: PropTypes.object.isRequired
};


export default connect(null, { userSigninRequest })(Login);
