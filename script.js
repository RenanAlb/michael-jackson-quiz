const button = document.querySelector('.start-quiz');
const h1Michael = document.querySelector('.michael');
const h1Jackson = document.querySelector('.jackson');
const painelQuiz = document.querySelector('.painel-quiz');
const textAbout = document.querySelector('.text-about');

// Deletar painel
button.addEventListener('click', () => {
  painelQuiz.style.display = 'none';
  h1Jackson.style.display = 'none';
  h1Michael.style.display = 'none';
  button.style.display = 'none';
  textAbout.style.display = 'none';
  byElement.style.display = 'none';

  animationLoad();
});

// Lógica do quiz
const contentQuizElement = document.createElement('div');
contentQuizElement.classList.add('content-quiz');
const perguntas = [
  {
    pergunta: 'Qual era o apelido de Michael Jackson?',
    english: 'What was Michael Jackson\'s nickname?',
    options: ['Rei do Pop', 'Rei do Rock', 'Rei do Jazz', 'Rei do Rap'],
    resposta: 'a'
  },
  {
    pergunta: 'Qual é o nome do famoso passo de dança de Michael Jackson?',
    english: 'What is the name of Michael Jackson\'s famous dance move?',
    options: ['Moonwalk', 'Breakdance', 'Twist', 'Salsa'],
    resposta: 'a'
  },
  {
    pergunta: 'Qual o nome da música onde Michael Jackson aparece dançando com zumbis?',
    english: 'What is the name of the song where Michael Jackson dances with zombies?',
    options: ['Bad', 'Beat It', 'Thriller', 'Smooth Criminal'],
    resposta: 'c'
  },
  {
    pergunta: 'Qual cor da luva que Michael Jackson usava em suas performances?',
    english: 'What color was the glove Michael Jackson used in his performances?',
    options: ['Preta', 'Vermelha', 'Azul', 'Branca'],
    resposta: 'd'
  },
  {
    pergunta: 'Michael Jackson fez parte de qual grupo musical antes da carreira solo?',
    english: 'Which music group was Michael Jackson a part of before his solo career?',
    options: ['The Beatles', 'The Rolling Stones', 'Jackson 5', 'The Temptations'],
    resposta: 'c'
  },
  {
    pergunta: 'Qual o nome do parque temático que Michael Jackson construiu em sua casa?',
    english: 'What was the name of the theme park Michael Jackson built at his home?',
    options: ['Wonderland', 'Neverland', 'Dreamland', 'Magicland'],
    resposta: 'b'
  },
  {
    pergunta: 'Quantos irmãos Michael Jackson tinha no Jackson 5?',
    english: 'How many brothers did Michael Jackson have in the Jackson 5?',
    options: ['2', '3', '4', '5'],
    resposta: 'c'
  },
  {
    pergunta: 'Qual é o nome completo de Michael Jackson?',
    english: 'What is Michael Jackson\'s full name?',
    options: ['Michael James Jackson', 'Michael John Jackson', 'Michael Jackson Jr.', 'Michael Joseph Jackson'],
    resposta: 'd'
  },
  {
    pergunta: 'Qual música de Michael Jackson começa com a frase "She was more like a beauty queen"?',
    english: 'Which Michael Jackson song starts with the line "She was more like a beauty queen"?',
    options: ['Billie Jean', 'Thriller', 'Bad', 'Beat It'],
    resposta: 'a'
  },
  {
    pergunta: 'Em que ano Michael Jackson nasceu?',
    english: 'In what year was Michael Jackson born?',
    options: ['1960', '1958', '1962', '1956'],
    resposta: 'b'
  }
];

function randomTime() {
  const random = Math.floor(Math.random() * 5) * 1000 ;
  return random;
}

function animationLoad() {
  document.body.appendChild(contentQuizElement);
  const time = randomTime();

  contentQuizElement.innerHTML = `
    <l-ring
      size="40"
      stroke="5"
      bg-opacity="0"
      speed="2"
      color="white"
    ></l-ring>
  `;

  setTimeout(() => {
    contentQuizElement.innerHTML = '';
    renderQuestions();
  }, time);
};

let index = 0;
const respostasCertas = [];
const respostasErradas = [];

function renderQuestions() {
  if (index < perguntas.length) {
    contentQuizElement.innerHTML = `
    <div class="pergunta">${perguntas[index].english}</div>
    <div class="options">
      <button class="option" data-option="a">A) ${perguntas[index].options[0]}</button>
      <button class="option" data-option="b">B) ${perguntas[index].options[1]}</button>
      <button class="option" data-option="c">C) ${perguntas[index].options[2]}</button>
      <button class="option" data-option="d">D) ${perguntas[index].options[3]}</button>
    </div>
    `;

    const perguntaElement = document.querySelector('.pergunta');
    perguntaElement.addEventListener('mouseenter', () => {
      mouse.style.width = '550px';
      mouse.style.height = '550px';
      perguntaElement.innerText = `${perguntas[index].pergunta}`;
    });
    perguntaElement.addEventListener('mouseleave', () => {
      mouse.style.width = '160px';
      mouse.style.height = '150px';
      perguntaElement.innerText = `${perguntas[index].english}`;
    });

    const getAllButton = document.querySelectorAll('.content-quiz .option');
    getAllButton.forEach((buttonOption) => {
      buttonOption.addEventListener('click', (e) => {
        const getResponseUser = e.target.getAttribute('data-option');
        corrigirResposta(getResponseUser, perguntas[index].resposta);
      });

      buttonOption.addEventListener('mouseenter', () => {
        mouse.style.width = '50px';
        mouse.style.height = '50px';
      });

      buttonOption.addEventListener('mousemove', () => {
        mouse.style.width = '50px';
        mouse.style.height = '50px';
      });

      buttonOption.addEventListener('mouseleave', () => {
        mouse.style.width = '160px';
        mouse.style.height = '160px';
      });
    });
  } else {
    let message = '';
    if (respostasCertas.length <= 5) {
      message = 'Poderia ter sido melhor... Mas valeu a tentativa';
    } else if (respostasCertas.length > 5 && respostasCertas.length <= 9) {
      message = 'Parabéns! Você foi bem!';
    } else {
      message = 'Parabéns! Você foi fantástico!';
    }
    contentQuizElement.innerHTML = `
      <h1>Você acertou ${respostasCertas.length} das ${perguntas.length}!</h2>
      <p>${message}</p>
      <button class="return">Voltar</button>
    `;

    const returnButton = document.querySelector('.return');
    returnButton.addEventListener('click', () => {
      contentQuizElement.innerHTML = '';
      contentQuizElement.style.zIndex = '-1';
      painelQuiz.style.display = 'block';
      h1Jackson.style.display = 'block';
      h1Michael.style.display = 'block';
      button.style.display = 'block';
      textAbout.style.display = 'block';
      byElement.style.display = 'block';
      respostasErradas.splice(0, respostasErradas.length);
      respostasCertas.splice(0, respostasCertas.length);
      index = 0;
    });
  }
};

function corrigirResposta(responseUser, resposta) {
  if (responseUser == resposta) {
    respostasCertas.push(perguntas[index]);
  } else {
    respostasErradas.push({
      pergunta: perguntas[index].pergunta,
      resposta: responseUser,
      correctResponse: perguntas[index].resposta
    });
  }

  console.log(respostasCertas, respostasErradas);

  index++;
  renderQuestions();
};