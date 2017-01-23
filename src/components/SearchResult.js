import Footer from './Footer';
import Header from './Header';
import Search from './Search';
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as DataActions from '../actions/action';
import overall from './overall'

@connect((store) => {
  return {
    data: store.Data,
  }
})
export default class Results extends Component {

  componentWillMount(){
    this.props.dispatch(DataActions.Fetch(this.props.params.username, this.props.params.tag));
  }

  render() {
    // we can use ES6's object destructuring to effectively 'unpack' our props
    console.log(this.props);


    return (
    <div>
      <div className="container">
        <h2 className="header center orange-text">{this.props.params.username}#{this.props.params.tag}</h2>

      {
        (this.props.data.fetching ?
        (
          <div className="center">
          <div className="preloader-wrapper big active">
    <div className="spinner-layer spinner-blue-only">
      <div className="circle-clipper left">
        <div className="circle"></div>
      </div><div className="gap-patch">
        <div className="circle"></div>
      </div><div className="circle-clipper right">
        <div className="circle"></div>
      </div>
    </div>
  </div>
  </div>
      )
       :
      (
        (this.props.data.error != null? <h5 className="center red-text">{this.props.data.error.message} , please try to search again or contact administrator.</h5>
        :

        //output
        <div className="row center">


          <h5>  </h5>


        </div>


       )

      ))
     }
      </div>
    </div>
      );
  }
}
