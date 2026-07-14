function addTask() {
    const taskText = document.getElementById("task").value;
    if (taskText.trim() !== "") {
        const taskList = document.getElementById("taskList");
        const li = document.createElement("li");
        li.innerHTML = `${taskText} <button onclick="removeTask(this)">Remove</button>`;
        taskList.appendChild(li);
        document.getElementById("task").value = "";
    }
}

function removeTask(element) {
    element.parentElement.remove();
}
