import React from 'react';

const Navbar = () => (
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
        <li className="nav-item">
          <a className="nav-link" href="/login">Log In</a>
        </li>
        <li className="nav-item mr-2">
          <a className="nav-link" href="/signup">Sign Up</a>
        </li>
        <li className="nav-item mr-3">
          <a className="btn btn-outline-light" href="/add-business">Add Business</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
