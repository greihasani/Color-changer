let square = document.getElementById('katror');
let changeColorButton = document.getElementById('change-color-button');
let undoButton = document.getElementById('undo-button');
let redoButton = document.getElementById('redo-button');

let colorHistory = ['lightgreen'];
let currentIndex = 0;

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function changeColor() {
    let newColor = getRandomColor();
    square.style.backgroundColor = newColor;
    colorHistory.push(newColor);
    currentIndex++;
    updateButtons();
}

function undoColor() {
    if (currentIndex > 0) {
        currentIndex--;
        square.style.backgroundColor = colorHistory[currentIndex];
    }
    updateButtons();
}

function redoColor() {
    if (currentIndex < colorHistory.length - 1) {
        currentIndex++;
        square.style.backgroundColor = colorHistory[currentIndex];
    }
    updateButtons();
}

function updateButtons() {
    undoButton.disabled = currentIndex === 0;
    redoButton.disabled = currentIndex === colorHistory.length - 1;
  }
  
  changeColorButton.addEventListener('click', changeColor);
  undoButton.addEventListener('click', undoColor);
  redoButton.addEventListener('click', redoColor);
  
  updateButtons();