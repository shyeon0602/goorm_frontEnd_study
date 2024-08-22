import React from "react";

export default function Form({ value, setTodoData, setValue }) {
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

  return (
    <div>
      Form
      <form action="" style={{ display: "flex" }} onSubmit={handleSubmit}>
        <input
          type="text"
          name="value"
          style={{ flex: "10", padding: "5px" }}
          placeholder="해야 할 일을 입력하세요"
          value={value}
          onChange={handleChange}
        />
        <input type="submit" value="입력" className="btn" style={{ flex: 1 }} />
      </form>
    </div>
  );
}
