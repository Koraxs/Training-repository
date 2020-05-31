const taskInput = document.getElementById('task');
const addBtn = document.getElementById('addTaskBtn');
const listOfTask = document.getElementById('list');

function onBtnClick() {
  const li = document.createElement('li');

  li.textContent = taskInput.value;

  listOfTask.append(li);
  taskInput.value = '';
} 

addBtn.addEventListener('click', onBtnClick);

