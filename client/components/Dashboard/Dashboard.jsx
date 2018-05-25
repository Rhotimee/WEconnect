import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOneUser } from '../../actions/userActions';
 
class Dashboard extends Component {

  componentWillMount(){
    this.props.fetchOneUser(this.props.match.params.id)
  }


  render() {
    const {user} = this.props 

    if (!user){
      return <p>loading...</p>
    }

    return (
      <div>
        <p>{user.firstName}</p>
        <p>{user.lastName}</p>
        <p>{user.email}</p>
        
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.oneUser.oneUser
  }
}

export default connect(mapStateToProps, { fetchOneUser }) (Dashboard);