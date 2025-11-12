//your JS code here. If required.
const container = document.getElementById('container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#2ecc71', '#f1c40f', '#e67e22', '#1abc9c'];
const SQUARES = 800;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseleave', () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
}

function removeColor(element) {
  setTimeout(() => {
    element.style.background = '#1d1d1d';
  }, 1000); // revert after 1 second
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
