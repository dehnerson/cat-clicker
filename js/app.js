'use strict'

let clicks = document.querySelector('#clicks');
let catPic = document.querySelector('#cat-pic');

clicks.textContent = 0;

catPic.addEventListener('click', function(event) {
  clicks.textContent = parseInt(clicks.textContent) + 1;
});
