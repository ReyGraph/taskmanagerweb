let tasks = [];
let darkMode = false;

function loadTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = `${task.title} - Priority: ${task.priority}, Due Date: ${task.dueDate}`;
    
    li.style.backgroundColor = task.completed ? '#d3ffd3' : '#fff';
    taskList.appendChild(li);
  });
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskPriority = document.getElementById('taskPriority');
  const dueDate = document.getElementById('dueDate');

  const newTask = {
    title: taskInput.value,
    priority: taskPriority.value,
    dueDate: dueDate.value,
    completed: false,
  };

  tasks.push(newTask);
  loadTasks();
}

function filterTasks(completed) {
  return tasks.filter(task => task.completed === completed);
}

function loadFilteredTasks(completed) {
  const filteredTasks = filterTasks(completed);
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  filteredTasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = `${task.title} - Priority: ${task.priority}, Due Date: ${task.dueDate}`;
    
    li.style.backgroundColor = task.completed ? '#d3ffd3' : '#fff';
    taskList.appendChild(li);
  });
}

function toggleDarkMode() {
  const body = document.body;
  darkMode = !darkMode;
  body.classList.toggle('dark-mode', darkMode);
}
