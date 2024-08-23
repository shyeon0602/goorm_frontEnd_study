import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function Lists({ todoData, setTodoData }) {
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

  const handleEnd = (result) => {
    // 목적지가 없으면 이벤트 종료
    if (!result.destination) return;

    // 새로운 todoData 생성
    const newTodoData = todoData;

    // 변경시키는 아이템을 배열에서 지움 -> return값으로 지워진 아이템 잡아줌
    const [reorderedItem] = newTodoData.splice(result.source.index, 1);

    // 원하는 자리에 reorderedItem을 넣어줌
    newTodoData.splice(result.destination.index, 0, reorderedItem);
    setTodoData(newTodoData);
  };

  return (
    <div>
      {/* Lists */}
      <DragDropContext onDragEnd={handleEnd}>
        {/* droppableId 사용 시, index.js에서 엄격모드 해제 필요 */}
        <Droppable droppableId="todo">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data, index) => (
                <Draggable
                  key={data.id}
                  draggableId={data.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      key={data.id}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                    >
                      <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">
                        <div className="items-center">
                          <input
                            type="checkbox"
                            defaultChecked={false}
                            onChange={() => handleCompleteChange(data.id)}
                          />
                          <span
                            className={
                              data.completed ? "line-through" : undefined
                            }
                          >
                            {data.text}
                          </span>
                        </div>
                        <div className="items-center m-4">
                          <button onClick={() => handleClick(data.id)}>
                            x
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
