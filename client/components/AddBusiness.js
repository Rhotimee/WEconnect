import React from 'react';
import NavFoot from './NavFoot';

const AddBusiness = () => (
  <div className="add-business-cover">
    <NavFoot>
      <div className="add-business container py-5 mt-3 text-dark">

        <form className="row">
          <p className="col-12">Fields with <small>*</small> are required </p>
          <div className="form-group col-sm-6">
            <label htmlFor="text">Buisness Name <small>*</small> </label>
            <input type="text" className="form-control" id="text1" placeholder="Andela" required />
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="inputcategory">Business Category <small>*</small> </label>
            <select id="inputcategory" className="form-control">
              <option>Repair & Services</option>
              <option>Events & Weddings</option>
              <option>Health & Wellness</option>
              <option>Professional Services</option>
              <option>Others</option>
            </select>
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="">Business Phone Number</label>
            <input type="number" className="form-control" placeholder="+2348000000000" required />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="">Business Email <small>*</small></label>
            <input type="email" className="form-control" placeholder="name@example.com" required />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="inputAddress">Address <small>*</small></label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" required />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="inputCity">City <small>*</small> </label>
            <input type="text" className="form-control" id="inputCity" placeholder="City" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputState">State <small>*</small> </label>
            <select id="inputState" className="form-control">
              <option>Lagos</option>
              <option>Ogun</option>
            </select>
          </div>

          <div className="form-group col-md-6 mb-3">
            <label htmlFor="filefield">Business Image</label>
            <input type="file" className="form-control-file" id="filefield" />
          </div>
          <button type="submit" className="m-3 col-md-2 btn btn-dark mb-5">Submit</button>
        </form>
      </div>

    </NavFoot>
  </div>

);

export default AddBusiness;
