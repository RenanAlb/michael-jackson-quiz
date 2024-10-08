const mouse = document.createElement('div');
mouse.classList.add('mouse');
const byElement = document.querySelector('.by');

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
const speed = 0.2;

function hoverElements() {
  textAbout.addEventListener('mouseenter', () => {
    textAbout.innerText = 'Descubra se você conhece sobre o maior cantor Pop da história neste Quiz! Teste agora!';
    mouse.style.width = '300px';
    mouse.style.height = '300px';
  });
  textAbout.addEventListener('mouseleave', () => {
    textAbout.innerText = 'Find out if know about the biggest pop singer in history with this quiz!';
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

  byElement.addEventListener('mouseenter', () => {
    byElement.innerHTML = `
      <p class="school">Escola - ETEC Eudécio Luiz Vicente - Adamantina</p>
      <p class="teacher">Professora de Inglês - Aline Borro</p>
      <p class="students">
        Estudantes - Renan Albuquerque, Otávio Fernando, Henrique dos Santos Cardoso, João Pedro Passarini e João Vitor Gavazzi Veiga Amaro
      </p>
      <p class="code">Código de Renan Albuquerque</p>
    `;
    mouse.style.width = '600px';
    mouse.style.height = '600px';
  });
  byElement.addEventListener('mouseleave', () => {
    byElement.innerHTML = `
      <p class="school">School - ETEC Eudécio Luiz Vicente - Adamantina</p>
      <p class="teacher">English teacher - Aline Borro</p>
      <p class="students">
        Students - Renan Albuquerque, Otávio Fernando, Henrique dos Santos Cardoso, João Pedro Passarini and João Vitor Gavazzi Veiga Amaro
      </p>
      <p class="code">Code by Renan Albuquerque</p>
    `;
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