// Create variables targetting the relevant DOM elements here 👇
var loadCover = document.querySelector('.cover-image');
var loadTitle = document.querySelector('.cover-title');
var tag1 = document.querySelector('.tagline1');
var tag2 = document.querySelector('.tagline2');
// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
loadTitle.innerText = `${titles[getRandomIndex(titles)]}`;
loadCover.src = `${covers[getRandomIndex(covers)]}`;
tag1.innerText =`${descriptors[getRandomIndex(descriptors)]}`;


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
