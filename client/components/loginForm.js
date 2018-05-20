import React, {Component} from 'react';
import PropTypes from 'prop-types'


class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      errors: {}
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  
  onSubmit(event) {
    event.preventDefault();
    this.setState({ errors: {}, isLoading: true });
    this.props.userSigninRequest(this.state).then(
      () => {
        this.context.router.history.push('/');
      },
      ({ data }) => this.setState({errors: data, isLoading: false })
    );
  }

  
  render() {

    return(

    <form onSubmit={this.onSubmit}>
      <p className="col-12 my-3">Fields with <small>*</small> are required </p>
      <div className="form-group">
        <input 
          type="email" 
          className="form-control form-control-lg" 
          placeholder="Email *" 
          required 
          value={this.state.email}
          onChange={this.onChange}
          name="email"
          />
      </div>
      <div className="form-group">
        <input 
          type="password" 
          className="form-control form-control-lg" 
          placeholder="Password *" 
          required 
          value={this.state.password}
          onChange={this.onChange}
          name="password"
          />
      </div>
      <input type="submit" className="btn btn-outline-dark btn-block" />
    </form>
    )
  }
}

LoginForm.contextTypes = {
  router: PropTypes.object.isRequired
}

export default LoginForm;
