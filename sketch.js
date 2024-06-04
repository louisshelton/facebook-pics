let images = [];
let numImages = 64; 
let gridSize = 8; 

function preload() {
  for (let i = 0; i < numImages; i++) {
    images[i] = loadImage(`assets/facebook profile picks/${i}.jpg`); 
  }
}

function setup() {
  createCanvas(1500, 800);
  frameRate(10);
}

function draw() {
  background(255);
  let imgSize = width / gridSize;
  let shuffledIndexes = shuffle([...Array(numImages).keys()]); // Create an array of image indexes and shuffle it
  
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let imgIndex = shuffledIndexes[i * gridSize + j];
      image(images[imgIndex], j * imgSize, i * imgSize, imgSize, imgSize);
    }
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


