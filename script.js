import {Task} from "./Task.js";
document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    Task.loadTasks();
    function addTask() {
        const taskName = taskInput.value.trim();
        if (taskName) {
            const newTask = new Task(taskName);
            taskList.appendChild(newTask.getTaskElement());
            taskInput.value = "";
            Task.saveTasks();
        }
    }

    taskInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

    addTaskButton.addEventListener("click", addTask);
});
