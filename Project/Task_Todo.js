let todos = [];
const todoInput = document.getElementById("todoInput");

const addBtn = document.getElementById("addBtn");

const todoList = document.getElementById("todoList");

const totalTask = document.getElementById("totalTask");

const completedTask = document.getElementById("completedTask");

const emptyState = document.getElementById("emptyState");
addBtn.addEventListener("click", function(){

    console.log("Button Clicked");

});
console.log(todoInput.value);

if(todoInput.value === ""){
    alert("Please enter a task");
    return;
}
console.log(todoInput.value);
todos.push({

    text: todoInput.value,

    completed:false

});
console.log(todos);
[
   {
      text:"Learn HTML",
      completed:false
   }
]   
todoInput.value = "";a

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

    });

});