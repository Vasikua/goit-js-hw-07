const input = document.querySelector('#controls input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesCreateContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxesCreateContainer.innerHTML = '';
}

function createBoxes() {
  destroyBoxes();
  const amount = Number(input.value);
  
  for (let i = 0; i < amount; i++) {
    const boxSize = document.createElement('div');
    boxSize.style.width = `${30 + i * 10}px`;
    boxSize.style.height = `${30 + i * 10}px`;
    boxSize.style.backgroundColor = getRandomHexColor();
    
    boxesCreateContainer.append(boxSize);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}
                     