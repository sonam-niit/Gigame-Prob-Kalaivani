let todos = []; //initialize empty array

function handleSubmit(e) {
    e.preventDefault();
    const task = document.querySelector('#task');
    if (task.value == '') {
        alert('Task cannot be Empty');
    } else {
        todos.push({id:Date.now(),task:task.value});
        task.value = '';
        alert('Task Added successfully');
        display();
    }
}
function display() {
    const todoList = document.querySelector('#todos');
    if (todos.length !== 0) {
        let html = '';
        for (let t of todos) {
            html += `<li class='list-group-item'>${t.task}<button class='btn btn-danger float-end' 
            onclick='deleteTask(${t.id})'>X</button></li>`;
        }
        todoList.innerHTML = html;
    }else{
        todoList.innerHTML="<li class='list-group-item'>List is Empty</li>"
    }

}
function deleteTask(data){
    todos=todos.filter(item=>item.id!==data);
    display();
}

display();