import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateUserDetails, fetchOneUser } from '../../actions/userActions';
import UpdateUserForm from './UpdateUserForm';

/**
 * @class LoginForm
 *
 * @classdesc logs in user
 *
 */
class UpdateUser extends Component {
  /**
   * @description componentDidMount
   *
   * @returns {void}
   */
  componentWillMount() {
    this.props.fetchOneUser(this.props.match.params.id);
  }

  /**
   * @description render - renders the class component
   *
   * @return {object} returns an object
   *
   */
  render() {
    const { user, updateUserDetails } = this.props;

    if (!user) {
      return <h2>Loading...</h2>;
    }
    return (
      <div className="login-cover-img">
        <div className="login-cover-overlay">
          <div className="container py-3">
            <div className="card text-center mt-5 pt-3 auth-card ">
              <div className="card-body ">
                <h3>Sign Up </h3>
                <p>Fill this form to Signup</p>
                <UpdateUserForm updateUserDetails={updateUserDetails} user={user} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UpdateUser.propTypes = {
  fetchOneUser: PropTypes.func.isRequired
};

/**
   * @description mapStateToProps
   *
   * @param  {object} state  the state
   *
   * @returns {void}
   */
function mapStateToProps(state) {
  return {
    user: state.oneUser.oneUser,
  };
}

export default connect(mapStateToProps, {
  updateUserDetails,
  fetchOneUser,
})(UpdateUser);
