const images = [
  'images/1.jpg',
  'images/2.jpg',
  'images/3.jpg',
  'images/4.jpg',
  'images/5.jpg',
  'images/6.jpg'
];

let imageIndex = 0;
const imageElement = document.getElementById('slider-img');
setInterval(() => {
  if (imageIndex >= images.length) {
    imageIndex = 0;
  }
  const setImg = images[imageIndex];
  imageIndex++;
  imageElement.setAttribute('src', setImg)
}, 2000)