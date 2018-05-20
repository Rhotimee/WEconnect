import React, {Component} from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }
  
  render() {

    return(

    <form>
      <p className="col-12 my-3">Fields with <small>*</small> are required </p>
      <div className="form-group">
        <input type="email" className="form-control form-control-lg" placeholder="Email *" required />
      </div>
      <div className="form-group">
        <input type="password" className="form-control form-control-lg" placeholder="Password *" required />
      </div>
      <input type="submit" className="btn btn-outline-dark btn-block" />
    </form>
    )
  }
}

export default LoginForm;
