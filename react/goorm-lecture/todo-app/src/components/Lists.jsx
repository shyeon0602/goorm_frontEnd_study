import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import ListItem from "./ListItem";

const Lists = React.memo(({ todoData, setTodoData }) => {
  const handleEnd = (result) => {
    // 목적지가 없으면 이벤트 종료
    if (!result.destination) return;

    // 새로운 todoData 생성 (얕은 복사로 새로운 배열 생성)
    const newTodoData = [...todoData];

    // 변경시키는 아이템을 배열에서 지움 -> return값으로 지워진 아이템 잡아줌
    const [reorderedItem] = newTodoData.splice(result.source.index, 1);

    // 원하는 자리에 reorderedItem을 넣어줌
    newTodoData.splice(result.destination.index, 0, reorderedItem);

    // 상태 업데이트
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
                    <ListItem
                      key={data.id}
                      id={data.id}
                      text={data.text}
                      completed={data.completed}
                      todoData={todoData}
                      setTodoData={setTodoData}
                      provided={provided}
                    />
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
});

// 그냥 export Lists를 하면 에러 발생 -> 함수를 추출할 때도 React.memo로 감싸줘야함
export default React.memo(Lists);
