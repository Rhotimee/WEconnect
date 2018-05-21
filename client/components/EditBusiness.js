import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavFoot from './NavFoot';
import EditBusinessForm from './EditBusinessForm';
import { fetchOneBusiness, updateOneBusiness } from '../actions/businessAction';


class EditBusiness extends Component {
  componentWillMount(){
    this.props.fetchOneBusiness(this.props.match.params.id)
  }

  render() {
      
    return (
      <div className="add-business-cover">
        <NavFoot>
          <div className="add-business container py-5 mt-3 text-dark">
            <EditBusinessForm business={this.props.business} updateOneBusiness={updateOneBusiness}/>
          </div>
        </NavFoot>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    business: state.oneBusiness.oneBusiness
  }
}

export default connect(mapStateToProps, { fetchOneBusiness, updateOneBusiness })(EditBusiness);
