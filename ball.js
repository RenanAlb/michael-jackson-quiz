const mouse = document.createElement('div');
mouse.classList.add('mouse');

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
const speed = 0.2;

function hoverElements() {
  textAbout.addEventListener('mouseenter', () => {
    textAbout.innerText = 'Descubra se você conhece sobre o Maior Cantor Pop da história neste Quiz! Teste agora!';
    mouse.style.width = '300px';
    mouse.style.height = '300px';
  });
  textAbout.addEventListener('mouseleave', () => {
    textAbout.innerText = 'Discovery if you know about the Biggest Singer Pop of history in this Quiz! Test now!';
    mouse.style.width = '160px';
    mouse.style.height = '160px';
  });

  button.addEventListener('mouseenter', () => {
    button.innerText = 'Começar';
    mouse.style.width = '200px';
    mouse.style.height = '200px';
  });
  button.addEventListener('mouseleave', () => {
    button.innerText = 'Start quiz';
    mouse.style.width = '160px';
    mouse.style.height = '160px';
  });
};

document.addEventListener('mouseenter', () => {
  mouse.style.width = '160px';
  mouse.style.height = '160px';
  hoverElements();
  document.body.appendChild(mouse);
});

function animateCursor() {
  cursorX += (mouseX - cursorX) * speed;
  cursorY += (mouseY - cursorY) * speed;

  mouse.style.top = `${cursorY}px`;
  mouse.style.left = `${cursorX}px`;

  requestAnimationFrame(animateCursor);
};

animateCursor();

function moveMouse(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
};

document.addEventListener('mousemove', moveMouse);