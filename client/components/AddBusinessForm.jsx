import React from 'react';
import PropTypes from 'prop-types';

const AddBusinessForm = ({
  name,
  location,
  category,
  details,
  imagePreview,
  onChange,
  onSubmit,
  onFileChange,
}) =>
  (
    <form className="row" onSubmit={onSubmit} >
      <div className="form-group col-sm-6">
        <label htmlFor="text">Buisness Name <small>*</small> </label>
        <input
          type="text"
          className="form-control"
          placeholder="Andela"
          required
          value={name}
          onChange={onChange}
          name="name"
        />
      </div>
      <div className="form-group col-sm-6">
        <label htmlFor="inputcategory">Business Category <small>*</small> </label>
        <select
          id="inputcategory"
          className="form-control"
          value={category}
          onChange={onChange}
          name="category"
        >
          <option value="" disabled>choose category</option>
          <option>Repair & Services</option>
          <option>Events & Weddings</option>
          <option>Health & Wellness</option>
          <option>Professional Services</option>
          <option>Others</option>
        </select>
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="inputAddress">Business Details <small>*</small></label>
        <textarea
          id="bizdetails"
          placeholder="lorem ipsum"
          required
          value={details}
          onChange={onChange}
          name="details"
          className="form-control"
        />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="inputCity">Location <small>*</small> </label>
        <input
          type="text"
          className="form-control"
          id="inputCity"
          placeholder="City"
          value={location}
          onChange={onChange}
          name="location"
        />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="number">Business Phone Number</label>
        <input
          type="number"
          className="form-control"
          placeholder="+2348000000000"

          // value={number}
          onChange={onChange}
          name="number"
        />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="inputState">State <small>*</small> </label>
        <select
          id="inputState"
          className="form-control"
          // value={state}
          onChange={onChange}
          name="state"
        >
          <option>Lagos</option>
          <option>Ogun</option>
        </select>
      </div>

      <div className="row mx-1">
        <div className="form-group col-md-6 mb-3">
          <input
            type="file"
            className="form-control-file"
            id="filefield"
            onChange={onFileChange}
            name="businessImage"
            accept="image/*"
          />
        </div>

        <div className="col-md-4 mb-2 ">
          <img className="" src={imagePreview} alt="" />
        </div>
      </div>

      <p className="col-12">Fields with <small>*</small> are required </p>

      <button type="submit" className="m-3 col-md-2 btn btn-dark mb-5">Submit</button>
    </form>
  );

AddBusinessForm.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  imagePreview: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onFileChange: PropTypes.func.isRequired
};

export default AddBusinessForm;
