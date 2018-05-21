import React, { Component} from 'react';
import { connect } from 'react-redux';
import NavFoot from './NavFoot';
import AddBusinessForm from './AddBusinessForm'
import { addOneBusiness } from '../actions/businessAction';

class AddBusiness extends Component {

  render(){
    return (
    <div className="add-business-cover">
      <NavFoot>
        <div className="add-business container py-5 mt-3 text-dark">
          <AddBusinessForm addOneBusiness={addOneBusiness}/>
        </div>
      </NavFoot>
    </div>

)}}

export default connect(null, { addOneBusiness }) (AddBusiness);
