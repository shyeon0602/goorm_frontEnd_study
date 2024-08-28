import React from "react";

function ListItem({
  id,
  text,
  completed,
  todoData,
  setTodoData,
  provided,
  snapshot,
}) {
  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    // setState()를 통해서 todoData를 newTodoData로 상태 바꿔주기
    setTodoData(newTodoData);
  };

  return (
    <div>
      <div
        key={id}
        {...provided.draggableProps}
        ref={provided.innerRef}
        {...provided.dragHandleProps}
      >
        <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">
          <div className="items-center">
            <input
              type="checkbox"
              defaultChecked={false}
              onChange={() => handleCompleteChange(id)}
            />
            <span className={completed ? "line-through" : undefined}>
              {text}
            </span>
          </div>
          <div className="items-center m-4">
            <button onClick={() => handleClick(id)}>x</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ListItem, (prevProps, nextProps) => {
  // 여기서 비교를 통해 리렌더링을 할지 결정
  return (
    prevProps.id === nextProps.id &&
    prevProps.text === nextProps.text &&
    prevProps.completed === nextProps.completed &&
    prevProps.todoData === nextProps.todoData &&
    prevProps.provided === nextProps.provided &&
    prevProps.snapshot === nextProps.snapshot
  );
});
