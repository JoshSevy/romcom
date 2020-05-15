// Create variables targetting the relevant DOM elements here 👇
// cover title and tagline variables
var loadCover = document.querySelector('.cover-image');
var loadTitle = document.querySelector('.cover-title');
var tag1 = document.querySelector('.tagline-1');
var tag2 = document.querySelector('.tagline-2');
//btn variables
var randomCoverBtn = document.querySelector('.random-cover-button');
var loadingRandomCovers = document.querySelector('.home-view');
var makeNewBtn = document.querySelector('.make-new-button');
var homeBtn = document.querySelector('.home-button');
var saveCoverBtn = document.querySelector('.save-cover-button');
var viewSavedBtn = document.querySelector('.view-saved-button');
//page variables
var homeView = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');
var formView = document.querySelector('.form-view');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
randomCoverBtn.addEventListener('click', showNewRandomCvr);

makeNewBtn.addEventListener('click' , displayMakeOwnCover);






window.onload = function randomOnloadCvr() {
  showNewRandomCvr();
}

// Create your event handlers and other functions here 👇
function showNewRandomCvr() {
  loadCover.src = `${covers[getRandomIndex(covers)]}`
  loadTitle.innerText = `${titles[getRandomIndex(titles)]}`
  tag1.innerText = `${descriptors[getRandomIndex(descriptors)]}`;
  tag2.innerText = `${descriptors[getRandomIndex(descriptors)]}`;
}
// function displayMakeOwnCover() {
//   homeBtn.classList.remove('hidden');
//   homeView.classList.add('hidden');
//   formView.classList.remove('hidden');
//   randomCoverBtn.classList.add('hidden');
//   saveCoverBtn.classList.add('hidden');
// }


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
