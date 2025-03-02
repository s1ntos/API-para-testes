const apiUrl = 'http://localhost:3000/tasks';

// Carregar as tarefas ao iniciar
window.onload = fetchTasks;

function fetchTasks() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const taskList = document.getElementById('taskList');
            taskList.innerHTML = '';
            data.forEach(task => {
                const li = document.createElement('li');
                li.className = task.completed ? 'completed' : '';
                li.innerHTML = `
                    <span onclick="toggleTask(${task.id}, ${task.completed})">${task.title}</span>
                    <button class="delete-btn" onclick="deleteTask(${task.id})">X</button>
                `;
                taskList.appendChild(li);
            });
        });
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const title = taskInput.value.trim();
    if (!title) return;

    fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title })
    }).then(() => {
        taskInput.value = '';
        fetchTasks();
    });
}

function toggleTask(id, completed) {
    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: !completed })
    }).then(fetchTasks);
}

function deleteTask(id) {
    fetch(`${apiUrl}/${id}`, { method: 'DELETE' })
        .then(fetchTasks);
}
