let addTaskBtn = document.querySelector(".addTaskbtn");
let inputTask = document.querySelector("#inputTask");
let taskList = document.querySelector("#taskAdded");
let clearBtn = document.querySelector(".clearbtn");
let totalTodosSpan = document.querySelector("#totalTodos");
let completedTodosSpan = document.querySelector("#completedTodos");


function updateCounters(){
    let total = taskList.children.length;
    let completed = taskList.querySelectorAll("span.completed").length;
    totalTodosSpan.innerText = total;
    completedTodosSpan.innerText = completed;
}


addTaskBtn.addEventListener("click", () => {
    let task = inputTask.value.trim();
    if (!task) {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.classList.add("eachTask");

    let span = document.createElement("span");
    span.innerText = task;

    let textBox = document.createElement("div");
    textBox.classList.add("taskText");
    textBox.appendChild(span);

    let btnBox = document.createElement("div");
    btnBox.classList.add("taskBtns");


    let completeBtn = document.createElement("button");
    completeBtn.innerText = "✔";
    completeBtn.classList.add("completeBtn");
    completeBtn.addEventListener("click", () => {
        span.classList.toggle("completed");
        updateCounters();
    });


    let editBtn = document.createElement("button");
    editBtn.innerText = "✎";
    editBtn.classList.add("editBtn");
    editBtn.addEventListener("click", () => {
        if(editBtn.innerText === "✎") {
            let input = document.createElement("input");
            input.type = "text";
            input.value = span.innerText;
            input.classList.add("editInput");
            textBox.replaceChild(input, span);
            editBtn.innerText = "💾";
        } else {
            let input = textBox.querySelector(".editInput");
            span.innerText = input.value.trim() || span.innerText;
            textBox.replaceChild(span, input);
            editBtn.innerText = "💾";
        }
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "🗑";
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.addEventListener("click", () => {
        li.remove();
        updateCounters();
    });

    btnBox.appendChild(completeBtn);
    btnBox.appendChild(editBtn);  
    btnBox.appendChild(deleteBtn); 

    li.appendChild(textBox);
    li.appendChild(btnBox);

    taskList.appendChild(li);
    inputTask.value = "";
    updateCounters();
});

clearBtn.addEventListener("click", () => {
    taskList.innerHTML = "";
    updateCounters();
});
