const images = [
  'img/img.jpg',
  'img/img2.webp',
  'img/img3.jpg',
  'img/img4.webp',
  'img/img5.jpg',
  'img/img6.jpeg',
];

let cont = 0;
let time = 4000;
function changeImage() {
  cont = cont % images.length;
  painelQuiz.style.backgroundImage = `url(${images[cont]})`;
  cont++;
};

setInterval(changeImage, 4000);