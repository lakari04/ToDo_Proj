document.addEventListener("DOMContentLoaded", function() {
    const tasks = document.querySelectorAll(".task");

    tasks.forEach(task => {
        task.addEventListener("dblclick", function() {
            const taskDescription = task.querySelector(".task-description");
            taskDescription.classList.toggle("completed");
        });
    });
});