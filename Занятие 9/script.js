const LEFT_ARROW_KEY_CODE = 37;
const UP_ARROW_KEY_CODE = 38;
const RIGHT_ARROW_KEY_CODE = 39;
const DOWN_ARROW_KEY_CODE = 40;

const MOVE_OFFSET = 5;

const ENTER_KEY_CODE = 13;

const figureElement = document.getElementById('figure');
const shapeSelect = document.getElementById('shape');
const colorInput = document.getElementById('color');

init();

colorInput.addEventListener('keydown', submitColor); 

shapeSelect.addEventListener('change', submitShape);

document.addEventListener('keydown', moveShape);

function init() {
  figureElement.classList.add(shapeSelect.value);

  setColor(colorInput.value);

  figureElement.style.top = '50px';
  figureElement.style.left = '50px';
}

function setColor(color) {
  figureElement.style['background-color'] = color;
}

function moveTo(x, y) {
  setPosition({
    top: figureElement.offsetTop + y, 
    left: figureElement.offsetLeft + x 
  })
}

function setPosition(position) {
  figureElement.style.top = position.top + 'px';
  figureElement.style.left = position.left + 'px';
}

function submitColor(e){
  if (!e) e = window.event;
  const keyCode = e.keyCode || e.which;
  if (keyCode == ENTER_KEY_CODE){
    setColor(colorInput.value);
    return false;
  }
}

function submitShape() {
  figureElement.className = 'figure';
  figureElement.classList.add(shapeSelect.value);
}

function moveShape(e) {
  if (!e) e = window.event;
  const keyCode = e.keyCode || e.which;

  switch (keyCode) {
    case LEFT_ARROW_KEY_CODE:
      moveTo(-MOVE_OFFSET, 0);
      return false;

    case UP_ARROW_KEY_CODE:
      moveTo(0, -MOVE_OFFSET);
      return false;

    case RIGHT_ARROW_KEY_CODE:
      moveTo(MOVE_OFFSET, 0);
      return false;

    case DOWN_ARROW_KEY_CODE:
      moveTo(0, MOVE_OFFSET);
      return false;
  }
}