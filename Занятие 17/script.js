/*const REMOVE_TASK_CLASS = 'remove-btn';
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
*/

const albumTemplate = document.getElementById('album-template').innerHTML;
const listOfAlbums = document.getElementById('albumList');
const photoTemplate = document.getElementById('photo-template').innerHTML;
const listOfAlbumPhotos = document.getElementById('photos');

function albumClickHandler(albumId) {
  fetch('https://jsonplaceholder.typicode.com/photos?albumId='+albumId)
  .then((res) => res.json())
  .then((res) => {
    listOfAlbumPhotos.innerHTML=""; 

    res.map((photo) => {
      const li = document.createElement('li');
      li.innerHTML = photoTemplate
        .replace('{{photoTitle}}', photo.title)
        .replace('{{photoUrl}}', photo.url)
    
      listOfAlbumPhotos.append(li);
    })
  });
}

fetch('https://jsonplaceholder.typicode.com/albums')
.then((res) => res.json())
.then((res) => {
  res.map((album) => {
    const li = document.createElement('li');
    li.innerHTML = albumTemplate
      .replace('{{albumName}}', album.title)
      .replace('{{albumId}}', album.id)
  
    listOfAlbums.append(li);
    li.addEventListener('click',() => albumClickHandler(album.id));
  })
  const firstAlbumId = res[0].id;
  albumClickHandler(firstAlbumId);
});


