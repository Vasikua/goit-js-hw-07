const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');

btn.addEventListener('click', changeColor);

function changeColor() {
    const colorNow = getRandomHexColor();
    document.body.style.backgroundColor = colorNow;
  span.textContent = document.body.style.backgroundColor.value;
   
    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
  }
}