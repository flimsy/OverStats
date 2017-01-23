import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'


export default class Header extends Component {
  render() {
    return (
      <nav className="light-blue lighten-1" role="navigation">
     <div className="nav-wrapper container"><Link to="/" className="brand-logo">OverStats</Link>
       <ul className="right hide-on-med-and-down">
         <li><Link to="/">Home</Link></li>
         <li><a href="#">Contact Us</a></li>
       </ul>

       <ul id="nav-mobile" className="side-nav">
         <li><Link to="/">Home</Link></li>
       </ul>
       <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
     </div>
   </nav>
    );
  }
}
