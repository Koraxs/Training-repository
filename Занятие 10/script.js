const REMOVE_TASK_CLASS = 'remove-btn';
const TOGGLE_TASK_CLASS = 'task';

const taskInput = document.getElementById('task');
const addBtn = document.getElementById('addTaskBtn');
const listOfTask = document.getElementById('list');
const taskTemplate = document.getElementById('task-template').innerHTML;

addBtn.addEventListener('click', onBtnClick);
listOfTask.addEventListener('click', taskClickHandler);

function onBtnClick() {
  const li = document.createElement('li');
  li.innerHTML = taskTemplate.replace('{{task_name}}',taskInput.value);

  listOfTask.append(li);
  taskInput.value = '';
} 

function taskClickHandler(event) {
  const e = event.target;
  if(e.classList.contains(REMOVE_TASK_CLASS)) removeTask(e);
  else if(e.classList.contains(TOGGLE_TASK_CLASS)) toggleTaskState(e);
}

function toggleTaskState(task) {
  task.classList.toggle('done');
}

function removeTask(removeBtn) {
  removeBtn.parentElement.parentElement.remove();
}