
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const list = document.querySelector("#list");

const minRight = 0;
const maxRight = 200;
const step = 100;
let currentRight = 0;

list.style.right = currentRight;

right.addEventListener("click", function(e) {
	e.preventDefault();
  if (currentRight < maxRight) {
    currentRight += step;
    list.style.right = currentRight + "%";
  }
});

left.addEventListener("click", function(e) {
	e.preventDefault();
  if (currentRight > minRight) {
    currentRight -= step;
    list.style.right = currentRight + "%";
  }
});
