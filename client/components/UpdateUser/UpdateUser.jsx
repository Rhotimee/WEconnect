import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUserDetails, fetchOneUser } from '../../actions/userActions';
import UpdateUserForm from './UpdateUserForm';
import PropTypes from 'prop-types';

class UpdateUser extends Component {
  componentWillMount() {
    this.props.fetchOneUser(this.props.match.params.id);
  }

  render() {
    const { user, updateUserDetails } = this.props;

    if (!user) {
      return <h2>Loading...</h2>;
    }
    return (
      <div className="cover">
        <div className="cover-overlay">

          <div className="container py-5 auth" id="signup">
            <div className="card  text-center card-form my-2">
              <div className="card-body">
                <h3>Update Details</h3>
                <p>Fill this form to Update Details</p>
                <UpdateUserForm updateUserDetails={updateUserDetails} user={user} />
              </div>
              <div className="card-footer">Have an account ?  <a href="signin.html">Sign in</a></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.oneUser.oneUser,
  };
}

export default connect(mapStateToProps, {
  updateUserDetails,
  fetchOneUser,
})(UpdateUser);