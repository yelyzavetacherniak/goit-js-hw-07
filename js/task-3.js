// Завдання 3

const nameInput = document.querySelector('input#name-input');

nameInput.addEventListener('input', handleInput);

const nameOutput = document.querySelector('span#name-output');

function handleInput(event) {
  const newNameInput = event.target.value.trim();
  if (newNameInput === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = newNameInput;
  }
}
