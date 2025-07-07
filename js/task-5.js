// Завдання 5

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnColor = document.querySelector('button.change-color');
const spanColor = document.querySelector('span.color');

btnColor.addEventListener('click', handleClick);

function handleClick(event) {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  spanColor.textContent = newColor;
}
