import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditBusinessForm from './EditBusinessForm';
import { fetchOneBusiness, updateOneBusiness } from '../../actions/businessAction';


class EditBusiness extends Component {
  componentWillMount() {
    this.props.fetchOneBusiness(this.props.match.params.id);
  }

  render() {
    if (!this.props.business) {
      return <h2>Loading...</h2>;
    }
    console.log(this.props.business);
    return (
      <div className="add-business-cover">
        <div className="add-business container py-5 text-dark">
          <EditBusinessForm business={this.props.business} updateOneBusiness={updateOneBusiness} />
        </div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    business: state.oneBusiness.oneBusiness
  };
}

export default connect(mapStateToProps, { fetchOneBusiness, updateOneBusiness })(EditBusiness);
