import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Aux } from '../hoc/aux';
import { userSignoutRequest } from '../actions/userActions';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    const Auth = (
      <Aux>
        <li className="nav-item mr-2">
          <Link className="nav-link" to="/" onClick={this.props.userSignoutRequest}>Signout</Link>
        </li>
        <li className="nav-item mr-3">
          <a className="btn btn-outline-light" href="/add-business">Add Business</a>
        </li>
      </Aux>
    );

    const Guest = (
      <Aux>
        <li className="nav-item">
          <a className="nav-link" href="/login">Log In</a>
        </li>
        <li className="nav-item mr-2">
          <a className="nav-link" href="/signup">Sign Up</a>
        </li>
      </Aux>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-dark nav-bg py-3">
        <a className="navbar-brand ml-3" href="/">WECONNECT</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/businesses"><i className="fa fa-th" aria-hidden="true" /> Explore</a>
            </li>
            {this.props.signedInUser.isAuthenticated ? Auth : Guest }
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    signedInUser: state.user_reducer,
  };
}


export default connect(mapStateToProps, { userSignoutRequest })(Navbar);
