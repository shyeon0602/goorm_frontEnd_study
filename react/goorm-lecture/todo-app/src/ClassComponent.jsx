import React, { Component } from "react";
import "./App.css";

export default class ClassComponent extends Component {
  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };
  getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none",
    };
  };

  todoData = [
    {
      id: "1",
      text: "data1",
      completed: true,
    },
    {
      id: "2",
      text: "data2",
      completed: false,
    },
  ];

  render() {
    return (
      <div>
        ClassComponent
        <div className="container">
          <div className="todoBlock">
            <div className="title">
              <h1>할일 목록</h1>
            </div>
            {this.todoData.map((data) => (
              <div style={this.getStyle()} key={data.id}>
                <input type="checkbox" defaultChecked={false} />
                {data.text}
                <button style={this.btnStyle}>x</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
