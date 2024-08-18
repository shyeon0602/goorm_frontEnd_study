import React, { Component } from "react";
import "./App.css";

export default class ClassComponent extends Component {
  render() {
    return (
      <div>
        ClassComponent
        <div className="container">
          <div className="todoBlock"></div>
        </div>
      </div>
    );
  }
}
