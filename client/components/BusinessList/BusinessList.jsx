import React, { Component } from 'react';
import List_Business from './BusinessListItem';
import { connect } from 'react-redux';
import { fetchBusinesses } from '../../actions/businessAction';


class BusinessList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      type: '',
    };

  }

  componentWillMount() {
    this.props.fetchBusinesses(this.state.type , this.state.location);
  }


  render() {
    const eachBusiness = this.props.businesses.map(business => (
      <List_Business
        key={business.id}
        business={business}
      />
    ));


    return (
      <div className="bg-cover" >
          <div className="list-cover">

            <form action="" className="container bg-search py-5 sticky-top">
              <div className="row mx-4 ">
              <div className="col-md-7 px-1 my-1">
                <input 
                  type="text" 
                  className="b-name form-control form-control-lg" 
                  placeholder="I'm looking for..." 
                  value={this.state.text}
                  onChange={(event) => {
                    this.setState({ text: event.target.value });
                    this.props.fetchBusinesses(this.state.type ,this.state.text);
                  }}
                  
                  />
              </div>
              <div className="col-md-5 px-1 my-1">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-light" id="basic-addon1"> <i className="fa fa-map-marker" /> </span>
                  </div>
                  <select
                    className="form-control form-control-lg"
                    onChange={(event) => {
                      this.setState({ type: event.target.value });
                      this.props.fetchBusinesses(this.state.type ,this.state.location);
                    }}
                  >
                    <option defaultValue>Choose...</option>
                    <option value="location">Location</option>
                    <option value="category">Category</option>

                  </ select>
                  
                </div>
              </div>
              {/* <div className="col-md-2 px-1 my-1">
                <button className="form-control form-control-lg btn-dark search" type="submit"> <i className="fa fa-search" />  Search</button>
              </div> */}
            </div>
            </form>

            <div className="mx-4"id="business-list">
              <div className="row justify-content-center">
              {eachBusiness}
            </div>
            </div>

          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { businesses: state.Businesses.allBusinesses };
}

export default connect(mapStateToProps, { fetchBusinesses })(BusinessList);
