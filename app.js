// import functions

// reference needed DOM elements
const catImage = document.getElementById('cat-image');
console.log(catImage);

const catAudio = document.getElementById('cat-audio');
console.log(catAudio);
// set event listeners 
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
catImage.addEventListener('click', () => {
    catAudio.play();
})

const horseImage = document.getElementById('horse-image');
console.log(horseImage);

const horseAudio = document.getElementById('horse-audio');
console.log(horseAudio);

horseImage.addEventListener('click', () => {
    horseAudio.play();
})

const dogImage = document.getElementById('dog-image');
console.log(dogImage);

const dogAudio = document.getElementById('dog-audio');
console.log(dogAudio);

dogImage.addEventListener('click', () => {
    dogAudio.play();
})