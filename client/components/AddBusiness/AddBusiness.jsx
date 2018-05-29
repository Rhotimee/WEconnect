import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddBusinessForm from './AddBusinessForm';
import { addOneBusiness } from '../../actions/businessAction';

class AddBusiness extends Component {
  render() {
    return (
      <div className="add-business-cover">
          <div className="add-business container py-5 text-dark">
            <AddBusinessForm addOneBusiness={addOneBusiness} />
          </div>
      </div>

    );
  }
}

export default connect(null, { addOneBusiness })(AddBusiness);
