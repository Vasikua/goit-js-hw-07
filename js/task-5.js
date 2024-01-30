const changeColorButton = document.querySelector('.change-color');
const colorValueSpan = document.querySelector('.color');

changeColorButton.addEventListener('click', changeColor);

function changeColor() {
    
  const colorNow = getRandomHexColor();
  document.body.style.backgroundColor = colorNow;
  colorValueSpan.textContent = colorNow;;
}

function getRandomHexColor() {
        
  return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
  