//Todo Items 
let todos = [];
const addBtn = document.getElementById('btn-add');

addBtn.addEventListener('click', addTodo);

//Todo function
function addTodo() {
    const textbox = document.getElementById('todo-title');
    const title = textbox.value;

    const datePicker = document.getElementById('date-picker');
    const dueDate = datePicker.value;
    const id = new Date().getTime();



    //Adding todos item
    todos.push({
        title: title,
        dueDate: dueDate,
        id: id
    });

    //Update todo list
    renderList();
}

//Delete Todo Function
function deleteTodo(e) {
    const deleteBtn = e.target;
    const idsToBtn = Number(deleteBtn.id);
    

    console.log(typeof idsToBtn);
    todos = todos.filter(todo => {
        if(todo.id === idsToBtn) {
            return false;
        } else {
            return true;
        }
    })

    renderList();
}

//RenderList() Function
function renderList() {
    const todoList = document.getElementById('todo-list');

    todoList.innerHTML = '';
    
    //Append todo item to the list
    todos.forEach(todoObj => {
        const element = document.createElement('p');
        const deleteBtn = document.createElement('button');
        
        element.innerText = todoObj.title + ' ' + todoObj.dueDate;

        //Render Delete button
        deleteBtn.innerText = 'Delete';
        deleteBtn.id = todoObj.id;
        element.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', deleteTodo);

        
        todoList.appendChild(element);
    });
}