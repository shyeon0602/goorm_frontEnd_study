import React, { Component } from "react";
import "./App.css";

export default class ClassComponent extends Component {
  // state 객체 안에 data 담아주기
  state = {
    todoData: [
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
    ],
  };

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

  // 할일 목록 삭제
  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter((data) => data.id !== id);
    // setState()를 통해서 todoData를 newTodoData로 상태 바꿔주기
    this.setState({ todoData: newTodoData });
  };

  render() {
    return (
      <div>
        ClassComponent
        <div className="container">
          <div className="todoBlock">
            <div className="title">
              <h1>할일 목록</h1>
            </div>
            {/* 할일 목록 추가 */}
            {this.state.todoData.map((data) => (
              <div style={this.getStyle()} key={data.id}>
                <input type="checkbox" defaultChecked={false} />
                {data.text}
                <button
                  style={this.btnStyle}
                  onClick={() => this.handleClick(data.id)}
                >
                  x
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
