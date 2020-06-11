// cover title and tagline variables
var cover = document.querySelector('.cover-image');
var title = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var controls = document.querySelector('.controls');



var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover = new Cover(cover.src = covers[getRandomIndex(covers)], title.innerHTML = titles[getRandomIndex(titles)], tagline1.innerText = descriptors[getRandomIndex(descriptors)],  tagline2.innerText = descriptors[getRandomIndex(descriptors)]);

controls.addEventListener('click', displayPages);


function displayPages(event) {
  var randomCoverButton = document.querySelector('.random-cover-button');
  var makeNewButton = document.querySelector('.make-new-button');
  var savedButton = document.querySelector('.view-saved-button');
  var homeButton = document.querySelector('.home-button');
  if(event.target === randomCoverButton) {
    newRandomCover();
  } else if (event.target === makeNewButton) {
    viewForm();
  } else if (event.target === savedButton) {
    viewSavedCovers();
  } else if (event.target === homeButton) {
    viewHome();
  }
}

function newRandomCover() {
  currentCover = new Cover(cover.src = covers[getRandomIndex(covers)], title.innerHTML = titles[getRandomIndex(titles)], tagline1.innerText = descriptors[getRandomIndex(descriptors)],  tagline2.innerText = descriptors[getRandomIndex(descriptors)]);
}

function viewForm() {
  var homeView = document.querySelector('.home-view');
  var formView = document.querySelector('.form-view');
  var homeButton = document.querySelector('.home-button');
  var saveButton = document.querySelector('.save-cover-button');
  var randomCoverButton = document.querySelector('.random-cover-button');
  homeView.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  formView.classList.remove('hidden');
}

function viewSavedCovers() {
  var homeView = document.querySelector('.home-view');
  var formView = document.querySelector('.form-view');
  var homeButton = document.querySelector('.home-button');
  var saveButton = document.querySelector('.save-cover-button');
  var randomCoverButton = document.querySelector('.random-cover-button');
  var savedView = document.querySelector('.saved-view');
  homeView.classList.add('hidden');
  formView.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveButton.classList.add('hidden');
  savedView.classList.remove('hidden');
  homeButton.classList.remove('hidden');
}

function viewHome() {
  var homeView = document.querySelector('.home-view');
  var formView = document.querySelector('.form-view');
  var homeButton = document.querySelector('.home-button');
  var saveButton = document.querySelector('.save-cover-button');
  var randomCoverButton = document.querySelector('.random-cover-button');
  var savedView = document.querySelector('.saved-view');
  homeView.classList.remove('hidden');
  homeButton.classList.remove('hidden');
  randomCoverButton.classList.remove('hidden');
  formView.classList.add('hidden');
  saveButton.classList.add('hidden');
  savedView.classList.add('hidden');
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
