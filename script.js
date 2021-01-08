let btn = document.querySelector('.btn');
let body = document.querySelector('body');
btn.addEventListener('click', changeColor);

function changeColor() {
	event.preventDefault();
	body.style.background = `rgb(${random()},${random()},${random()})`;
}
function random() {
	return Math.round(0 + Math.random() * (255 + 1 - 0));
}

