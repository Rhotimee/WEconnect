import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EditBusinessForm from '../components/EditBusinessForm';
import { fetchOneBusiness, updateOneBusiness } from '../actions/businessAction';

/**
 * @class BusinessDetails
 *
 * @classdesc Details of business
 *
 */
export class EditBusiness extends Component {
/**
   * @description componentDidMount
   *
   * @returns {void}
   */
  componentDidMount() {
    this.props.fetchOneBusiness(this.props.match.params.id);
  }

  /**
   * @description render - renders the class component
   *
   * @return {object} returns an object
   *
   */
  render() {
    if (!this.props.business) {
      return <h2>Loading...</h2>;
    }

    return (
      <div>
        <div className="container py-5 add-business">
          <EditBusinessForm business={this.props.business} updateOneBusiness={updateOneBusiness} />
        </div>
      </div>
    );
  }
}

EditBusiness.propTypes = {
  fetchOneBusiness: PropTypes.func.isRequired,
  business: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired
};

/**
   * @description mapStateToProps
   *
   * @param  {object} state  the state
   *
   * @returns {void}
   */
function mapStateToProps(state) {
  return {
    business: state.oneBusiness.oneBusiness
  };
}

export default connect(mapStateToProps, { fetchOneBusiness, updateOneBusiness })(EditBusiness);
