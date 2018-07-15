import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="div footer py-5">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 my-2">
          <Link className="h3 text-light ml-3" to="/">WECONNECT</Link>
        </div>
        <div className="col-md-3 my-2 align-text-center">
          <ul>
            <li><h5>Useful Links</h5></li>
            <li><Link to="/">About weconnect</Link></li>
            <li><Link to="/">work with us</Link></li>
            <li><Link to="/">Advertise with us</Link></li>
          </ul>
        </div>
        <div className="col-md-3 my-2">
          <ul>
            <li><h5>Top Places</h5></li>
            <li><Link to="/">Place 1</Link></li>
            <li><Link to="/">Place 2</Link></li>
            <li><Link to="/">Place 2</Link></li>
          </ul>
        </div>
        <div className="col-md-3 my-2">
          <h5>Follow us</h5>
          <div className="social-links">
            <i className="fab fa-facebook-f" />
            <i className="fab fa-twitter" />
            <i className="fab fa-google-plus-g" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
