import React, {Component} from 'react';
import Navbar from "./Navbar";

export default class Layout extends React.Component {

  render(){

    return(
      <div>
        <Navbar />
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
