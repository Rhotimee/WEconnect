import React from 'react';
import AddBusinessForm from './AddBusinessForm';
import { addOneBusiness } from '../../actions/businessAction';

const AddBusiness = () => (
  <div>
    <div className="container py-5 add-business">
      <AddBusinessForm addOneBusiness={addOneBusiness} />
    </div>
  </div>
  // <div className="add-business-cover">
  //   <div className="add-business container py-5 text-dark">
  //     <AddBusinessForm addOneBusiness={addOneBusiness} />
  //   </div>
  // </div>

);

export default AddBusiness;
