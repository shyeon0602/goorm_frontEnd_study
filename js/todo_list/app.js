const createBtnElement = document.querySelector('#create-btn');
const todoListElement = document.querySelector('#list');

let todoList = [];
let currentId = 0;

createBtnElement.addEventListener('click', createTodo);

// 새로운 할일 생성
function createTodo() {
    const todoItem = {
        id: currentId,
        text: '',
        complete: false,
    }

    currentId++;
    todoList.unshift(todoItem); // 배열에 새로운 아이템 추가
    createTodoElement(todoItem);
}

// 할일 요소 생성
function createTodoElement(todoItem) {
    const todoItemDiv = document.createElement('div');
    todoItemDiv.classList.add('item');
    
    const checkboxElement = document.createElement('input');
    checkboxElement.type = 'checkbox';

    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.value = todoItem.text;
    inputElement.setAttribute('disabled', '');  // 속성 비활성화

    if(todoItem.complete) {
        todoItemDiv.classList.add('complete');  // css에서 .complete 스타일 추가
    }
}