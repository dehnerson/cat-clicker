'use strict'


const cats = [{name: 'Hanni', clicks: 0, pic: 'img/cat.jpg'}, {name: 'Nanni', clicks: 0, pic: 'img/cat2.jpg'} ];

let catList = document.querySelector('.cat-list');
let catDisplay = document.querySelector('.cat-display');
let catName = catDisplay.querySelector('.cat-name');
let catClicks = catDisplay.querySelector('.cat-clicks');
let catPic = catDisplay.querySelector('.cat-pic');

for(let i=0; i<cats.length; i++) {
  let cat = cats[i];
  let newLi = document.createElement('li');
  newLi.id = i;
  newLi.textContent = cat.name;

  catList.appendChild(newLi);
}

catList.addEventListener('click', function(event) {
  if(event.target.nodeName === 'LI') {
    let cat = cats[event.target.id];

    catName.textContent = cat.name;
    catClicks.textContent = cat.clicks;
    catPic.src = cat.pic;
    catPic.catIndex = event.target.id;

    catDisplay.classList.remove('hidden');
  }
});

catPic.addEventListener('click', function(event) {
  let cat = cats[event.target.catIndex];

  cat.clicks ++;
  catClicks.textContent = cat.clicks;
});
