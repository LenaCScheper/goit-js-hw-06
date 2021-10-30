function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const color = document.querySelector('.color');
const colors = ['red', 'green'];

const button = document.querySelector('.change-color');
button.addEventListener('click', () => {
  let hexColor = colors[getRandomHexColor()];
document.body.style.backgroundColor = hexColor;

});

 