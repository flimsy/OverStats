import React, { Component } from 'react';
import {browserHistory} from 'react-router';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '', tagnum: ''};

    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleTagChange = this.handleTagChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserChange(event) {
   this.setState({username: event.target.value});
 }


 handleTagChange(event) {
  this.setState({tagnum: event.target.value});
}

 handleSubmit(event) {
   event.preventDefault();
   browserHistory.push('/search/' + this.state.username + '/' + this.state.tagnum);
 }

  render() {
    return (
      <div className="section no-pad-bot" id="index-banner">
       <div className="container">
         <br /> <br />
         <h1 className="header center orange-text">Welcome</h1>
         <div className="row center">
           <h5 className="header col s12 light">Please enter <b>user</b> and <b>tag #</b> below</h5>
         </div>
         <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <input id="username" required={true} emptyMessage="Name is required" value={this.state.username} type="text" name="username" className="validate" onChange={this.handleUserChange} />
                <label htmlFor="username">Username</label>
              </div>
              <div className="input-field col s6">
                <input id="tagnum" required={true}  minCharacters={3} errorMessage="Name is invalid" emptyMessage="Tag# is required" value={this.state.tagnum} type="text" name="tagnum" className="validate" onChange={this.handleTagChange} />
                <label htmlFor="tagnum">Tag#</label>
              </div>
            </div>
            <div className="row center">
            <p>
              <input className="with-gap orange darken-1" name="group1" type="radio" id="test1"/>
              <label htmlFor="test1">US</label>
            </p>
            <p>
              <input className="with-gap" name="group1" type="radio" id="test2" />
              <label htmlFor="test2">EU</label>
            </p>
            <p>
              <input className="with-gap" name="group1" type="radio" id="test3"  />
              <label htmlFor="test3">KR</label>
            </p>
            </div>
            <div className="row center">
              <button type="submit" className="btn-large waves-effect waves-light orange"> Search </button>
            </div>
          </form>
        </div>
       </div>
     </div>
    );
  }
}
