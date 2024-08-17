const createBtnElement = document.querySelector("#create-btn");
const todoListElement = document.querySelector("#list");

let todoList = [];
let currentId = 0;

createBtnElement.addEventListener("click", createTodo);

// 새로운 할일 생성
function createTodo() {
  console.log("create todo item");

  const todoItem = {
    id: currentId,
    text: "",
    complete: false,
  };

  currentId++;
  console.log(`current ID: ${currentId}`);

  todoList.unshift(todoItem); // 배열에 새로운 아이템 추가
  const { todoItemDiv, inputElement } = createTodoElement(todoItem);

  // 리스트 안에 아이템 요소 추가 -> pre는 이미 생성된 아이템 요소 앞에 새로운 요소 생성
  todoListElement.prepend(todoItemDiv);
  inputElement.removeAttribute("disabled");
  inputElement.focus();

  saveToLocalStorage(); // 로컬스토리지에 데이터 저장
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

  createTodoEvent(
    todoItem,
    todoItemDiv,
    inputElement,
    checkboxElement,
    editButton,
    removeButton
  );

  return { todoItemDiv, inputElement, editButton, removeButton }; // 생성한 요소 반환
}

function createTodoEvent(
  todoItem,
  todoItemDiv,
  inputElement,
  checkboxElement,
  editButton,
  removeButton
) {
  inputElement.addEventListener("input", () => {
    todoItem.text = inputElement.value;
  });

  checkboxElement.addEventListener("change", () => {
    todoItem.complete = checkboxElement.checked;
    console.log("checkbox checked");

    if (todoItem.complete) {
      todoItemDiv.classList.add("complete");
      editButton.disabled = true; // 완료된 할일은 수정 불가하도록 함
      console.log("disabled edit button");
    } else {
      todoItemDiv.classList.remove("complete");
      editButton.disabled = false;
      console.log("enabled edit button");
    }

    saveToLocalStorage(); // checked된 변경사항 로컬스토리지에 저장
  });

  inputElement.addEventListener("blur", () => {
    inputElement.setAttribute("disabled", "");

    saveToLocalStorage(); // 수정된 사항 로컬스토리지 저장
  });

  editButton.addEventListener("click", () => {
    inputElement.removeAttribute("disabled");
    inputElement.focus();

    console.log("edit text");
  });

  removeButton.addEventListener("click", () => {
    todoList = todoList.filter((item) => item.id != todoItem.id);

    todoItemDiv.remove();
    console.log("removed todo item");

    saveToLocalStorage(); // 삭제된 데이터 로컬스토리지 저장
  });
}

// localStorage에 데이터 저장
function saveToLocalStorage() {
  const data = JSON.stringify(todoList);
  window.localStorage.setItem("todo-list", data);
}

// localStorage에 저장된 데이터를 불러오기
function loadFromLocalStorage() {
  const data = localStorage.getItem("todo-list");

  if (data) {
    todoList = JSON.parse(data); // json string을 object 객체로 변환
  }
}

function displayTodoList() {
  loadFromLocalStorage();

  for (let i = 0; i < todoList.length; i++) {
    const todoItem = todoList[i];
    const { todoItemDiv } = createTodoElement(todoItem); // 리스트에 있으면 요소 생성

    todoListElement.append(todoItemDiv); // .list div에 아이템 div 삽입
  }
}

displayTodoList();
