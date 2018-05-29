import React, { Component } from 'react';
import PropTypes from 'prop-types';
import alertify from 'alertifyjs';

class UpdateUserForm extends Component {
  constructor(props) {
    super(props);

    const { user, updateUserDetails } = this.props;

    this.state = {
      firstName: user.firstName,
      lastName: user.lastName,
      errors: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.updateUserDetails(this.props.user.id, this.state).then(
      () => {
        this.context.router.history.push('/');
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
        {/* <div className="form-group">
          <input
            type="email"
            className="form-control form-control-lg"
            placeholder="Email *"
            value={this.state.email}
            onChange={this.onChange}
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control form-control-lg"
            placeholder="Password *"
            value={this.state.password}
            onChange={this.onChange}
            name="password"
            required
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
        </div> */}
        <input
          // disabled={this.state.isLoading}
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
