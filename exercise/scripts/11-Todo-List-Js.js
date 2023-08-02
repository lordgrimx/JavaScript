let todoList = [];
let todoDate = [];



function addTodoList() {
    let myTodoList = document.querySelector('.mrgn-js-1');

    let inputElement = myTodoList.value;

    todoList.push(inputElement);

    myTodoList.value = '';
}

function showTodoList() {
    console.log(todoList);
}

function addTodoList2() {
    let myTodoList2 = document.querySelector('.mrgn-js-2');

    let inputElement2 = myTodoList2.value;

    todoList.push(inputElement2);

    myTodoList2.value = '';

    showTodoList2();
}

function showTodoList2() {
    let todoListHTML = '';

    for(let i = 0; i < todoList.length; i++){
        let todo = todoList[i];
        let html = `<p>${todo}<\p>`;
        todoListHTML += html;
    }
    document.querySelector('.show-todo').innerHTML = todoListHTML;
}

function addTodoList3(){
    const todoNameElem = document.querySelector('.js-input');
    const name = todoNameElem.value;

    const todoDueDateElem = document.querySelector('.js-date');
    const dueDate = todoDueDateElem.value;

    todoList.push({
        name, 
        dueDate
    });

    renderTodoList();
    todoNameElem.value = '';
    todoDueDateElem.value = '';
}

function deleteTodo(index) {
    todoList.splice(index,1);
    renderTodoList();
}

function renderTodoList(){
    let todoListHTML2 = '';

    todoList.forEach((todoObject , index) => {
        const {name, dueDate} = todoList[index];

        todoListHTML2 += `
        <div class="todo-row">
            <div class="todo-p1">${name}</div>
            <div class="todo-p2">${dueDate}</div>
            <button class="red-btn" onclick="deleteTodo(${index})">
                Delete
            </button>
        </div>
         `;
    });

    

    document.querySelector('.show-todo-list').innerHTML = todoListHTML2;
}