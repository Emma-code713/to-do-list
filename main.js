var inputTodo = document.getElementById("inputTodo"); 
var listContainer = document.getElementById("list-container"); 

function addTask(){
    if (inputTodo.value === ''){
        alert("you must input a task!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputTodo.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
          }
    inputTodo.value = "";
}

listContainer.addEventListener("click",function(e){
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
    }
}, false );