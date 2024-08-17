const createBtnElement = document.querySelector("#create-btn");
const todoListElement = document.querySelector("#list");

let todoList = [];
let currentId = 0;

createBtnElement.addEventListener("click", createTodo());

// 새로운 할일 생성
function createTodo() {
  console.log("create todo item");

  const todoItem = {
    id: currentId,
    text: "",
    complete: false,
  };

  currentId++;
  console.log(currentId);

  todoList.unshift(todoItem); // 배열에 새로운 아이템 추가
  const { todoItemDiv, inputElement, editButton, removeButton } =
    createTodoElement(todoItem);

  todoListElement.prepend(todoItemDiv); // 리스트 안에 아이템 요소 추가
}

// 할일 요소 생성
function createTodoElement(todoItem) {
  const todoItemDiv = document.createElement("div");
  todoItemDiv.classList.add("item");

  const checkboxElement = document.createElement("input");
  checkboxElement.type = "checkbox";
  checkboxElement.checked = todoItem.complete;

  const inputElement = document.createElement("input");
  inputElement.type = "text";
  inputElement.value = todoItem.text;
  inputElement.setAttribute("disabled", ""); // 속성 비활성화, 생성한 후에 입력 방지

  if (todoItem.complete) {
    todoItemDiv.classList.add("complete"); // css에서 .complete 스타일 추가
  }

  todoItemDiv.append(checkboxElement);
  todoItemDiv.append(inputElement);

  const modifyElement = document.createElement("div");
  modifyElement.classList.add("modify");

  const editButton = document.createElement("button");
  editButton.classList.add("edit-button");
  editButton.innerHTML = "edit";

  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-button");
  removeButton.innerHTML = "remove";

  modifyElement.append(editButton);
  modifyElement.append(removeButton);

  todoItemDiv.append(modifyElement);

  return { todoItemDiv, inputElement, editButton, removeButton }; // 생성한 요소 반환
}
