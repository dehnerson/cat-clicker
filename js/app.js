'use strict'

let initCat = function(catDiv, name) {
  catDiv.querySelector('.cat-name').textContent = name;

  let catClicks = catDiv.querySelector('.cat-clicks');
  catClicks.textContent = 0;

  catDiv.querySelector('.cat-pic').addEventListener('click', function(event) {
    incrementClickCounter(catClicks);
  });
};

let incrementClickCounter = function(clickCounterElement) {
  clickCounterElement.textContent = parseInt(clickCounterElement.textContent) + 1;
};


let cat1 = document.querySelector('#cat1');
let cat2 = document.querySelector('#cat2');

initCat(cat1, 'Hanni');
initCat(cat2, 'Nanni');
