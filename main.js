const inputBox = document.getElementById("input_task");
const addBtn = document.getElementById("add_button");
const deleteAllBtn = document.getElementById("delete_button");
const todoList = document.getElementById("todoList");

document.getElementById("input_task").addEventListener("keyup", addTask);

function addTask(){
    let userEnteredValue = inputBox.value;
    if(userEnteredValue.trim() != 0){
        addBtn.classList.add("active"); 
    }else{
        addBtn.classList.remove("active");
    }
}

showTasks();

function button_add(){
    let userEnteredValue = inputBox.value;
    let getLocalStorageData = localStorage.getItem("New Todo");
    if(getLocalStorageData == null){
        listArray = [];
    }else{
        listArray = JSON.parse(getLocalStorageData);
    }
    listArray.push(userEnteredValue);
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTasks();
    addBtn.classList.remove("active");
}

function showTasks(){
    let getLocalStorageData = localStorage.getItem("New Todo");
    if(getLocalStorageData == null){
      listArray = [];
    }else{
      listArray = JSON.parse(getLocalStorageData); 
    }
    const pendingTasksNumb = document.getElementById("pending_tasks");
    pendingTasksNumb.textContent = listArray.length;
    if(listArray.length > 0){
        deleteAllBtn.classList.add("active");
    }else{
        deleteAllBtn.classList.remove("active");
    }
    let newLiTag = "";
    listArray.forEach((element, index)=>{
        newLiTag += '<li>'+element+'<span class="icon" onclick="deleteTask('+index+')"><i class="fas fa-trash"></i></span></li>';
    });
    todoList.innerHTML = newLiTag; 
    inputBox.value = ""; 
}

function deleteTask(index){
    let getLocalStorageData = localStorage.getItem("New Todo");
    listArray = JSON.parse(getLocalStorageData);
    listArray.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTasks();
}

function deleteAll(){
    listArray = [];
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTasks();
}