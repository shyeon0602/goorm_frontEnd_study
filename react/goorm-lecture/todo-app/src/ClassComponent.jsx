import React, { Component } from "react";
import "./App.css";

export default class ClassComponent extends Component {
  // state 객체 안에 data 담아주기
  state = {
    todoData: [
      // {
      //   id: Date.now(),
      //   text: '',
      //   completed: false
      // }
    ],
    value: "",
  };

  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };
  getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  // 할일 목록 삭제
  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter((data) => data.id !== id);
    // setState()를 통해서 todoData를 newTodoData로 상태 바꿔주기
    this.setState({ todoData: newTodoData });
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
    // console.log(e.target.value, this.state.value);
  };

  handleSubmit = (e) => {
    // form 안에 input을 전송할 때 페이지 리로드 방지
    e.preventDefault();

    // 새로운 할일 데이터
    let newTodo = {
      id: Date.now(),
      text: this.state.value,
      completed: false,
    };

    // 원래 존재하던 할일에 새로운 할일 추가
    this.setState({ todoData: [...this.state.todoData, newTodo], value: "" });
  };

  handleCompleteChange = (id) => {
    let newTodoData = this.state.todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
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
              <div style={this.getStyle(data.completed)} key={data.id}>
                <input
                  type="checkbox"
                  defaultChecked={false}
                  onChange={() => this.handleCompleteChange(data.id)}
                />
                {data.text}
                <button
                  style={this.btnStyle}
                  onClick={() => this.handleClick(data.id)}
                >
                  x
                </button>
              </div>
            ))}

            <form
              action=""
              style={{ display: "flex" }}
              onSubmit={this.handleSubmit}
            >
              <input
                type="text"
                name="value"
                style={{ flex: "10", padding: "5px" }}
                placeholder="해야 할 일을 입력하세요"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <input
                type="submit"
                value="입력"
                className="btn"
                style={{ flex: 1 }}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
