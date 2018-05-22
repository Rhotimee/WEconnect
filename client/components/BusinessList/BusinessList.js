import React, { Component } from 'react';
import axios from 'axios';
import List_Business from './BusinessListItem';
import { connect } from 'react-redux';
import { fetchBusinesses } from '../../actions/businessAction';


class BusinessList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // businesses : [],
      // selectedBusiness: null,
      location: '',
    };

    // this.businessLoactionSearch('');
  }

  componentWillMount() {
    this.props.fetchBusinesses();
  }

  // businessLoactionSearch(loaction) {
  //   axios.get(`/api/v1/businesses?location=${loaction}`).then(response => {
  //     this.setState({ businesses: response.data.businesses })
  //   })
  // }

  render() {
    const eachBusiness = this.props.businesses.map(business => (
      <List_Business
        key={business.id}
        business={business}
        onBusinessSelect={(selectedBusiness) => { this.setState({ selectedBusiness }); }}
      />
    ));


    return (
      <div className="bg-cover" >
          <div className="list-cover">

            <form action="" className="container bg-search py-5 sticky-top">
              <div className="row mx-4 ">
              <div className="col-md-6 px-1 my-1">
                <input type="text" className="b-name form-control form-control-lg" placeholder="I'm looking for..." />
              </div>
              <div className="col-md-4 px-1 my-1">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-light" id="basic-addon1"> <i className="fa fa-map-marker" /> </span>
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Lagos"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={this.state.loaction}
                    onChange={(event) => {
                      this.setState({ location: event.target.value });
                      this.businessLoactionSearch(this.state.location);
                    }}

                  />
                </div>
              </div>
              <div className="col-md-2 px-1 my-1">
                <button className="form-control form-control-lg btn-dark search" type="submit"> <i className="fa fa-search" />  Search</button>
              </div>
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