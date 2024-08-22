import React, { useState } from "react";
import "./App.css";
import Lists from "./components/Lists";

export default function App() {
  // 첫번째 인수는 변수 이름, 두번째 인수는 state를 정하는 함수
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  // const btnStyle = {
  //   color: "#fff",
  //   border: "none",
  //   padding: "5px 9px",
  //   borderRadius: "50%",
  //   cursor: "pointer",
  //   float: "right",
  // };
  // const getStyle = (completed) => {
  //   return {
  //     padding: "10px",
  //     borderBottom: "1px #ccc dotted",
  //     textDecoration: completed ? "line-through" : "none",
  //   };
  // };

  // 할일 목록 삭제
  // const handleClick = (id) => {
  //   let newTodoData = todoData.filter((data) => data.id !== id);
  //   // setState()를 통해서 todoData를 newTodoData로 상태 바꿔주기
  //   setTodoData(newTodoData);
  // };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    // form 안에 input을 전송할 때 페이지 리로드 방지
    e.preventDefault();

    // 새로운 할일 데이터
    let newTodo = {
      id: Date.now(),
      text: value,
      completed: false,
    };

    // 원래 존재하던 할일에 새로운 할일 추가
    // setter에서 이전 state를 가지고 오기 위해서 인수에 함수를 이용해서 사용할 수 있음
    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
  };

  // const handleCompleteChange = (id) => {
  //   let newTodoData = todoData.map((data) => {
  //     if (data.id === id) {
  //       data.completed = !data.completed;
  //     }
  //     return data;
  //   });
  //   setTodoData(newTodoData);
  // };

  return (
    <div>
      function Component
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할일 목록</h1>
          </div>

          {/* 할일 목록 추가 */}
          {/* {todoData.map((data) => (
            <div style={getStyle(data.completed)} key={data.id}>
              <input
                type="checkbox"
                defaultChecked={false}
                onChange={() => handleCompleteChange(data.id)}
              />
              {data.text}
              <button style={btnStyle} onClick={() => handleClick(data.id)}>
                x
              </button>
            </div>
          ))} */}

          <Lists todoData={todoData} setTodoData={setTodoData} />

          <form action="" style={{ display: "flex" }} onSubmit={handleSubmit}>
            <input
              type="text"
              name="value"
              style={{ flex: "10", padding: "5px" }}
              placeholder="해야 할 일을 입력하세요"
              value={value}
              onChange={handleChange}
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
