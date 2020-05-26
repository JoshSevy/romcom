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

controls.addEventListener('click', newRandomCover);



function newRandomCover() {
  currentCover = new Cover(cover.src = covers[getRandomIndex(covers)], title.innerHTML = titles[getRandomIndex(titles)], tagline1.innerText = descriptors[getRandomIndex(descriptors)],  tagline2.innerText = descriptors[getRandomIndex(descriptors)]);
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
