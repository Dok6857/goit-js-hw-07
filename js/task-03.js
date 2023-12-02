'use strict';
const nameInput = document.getElementById('name-input'),
  nameOutput = document.getElementById('name-output');

const inputHandler = event => {
  const trimmedValue = event.currentTarget.value.trim();
  nameOutput.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
};

nameInput.addEventListener('input', inputHandler);
