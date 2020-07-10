document.querySelector('.write-us-link').onclick = function() {
	document.getElementById('write-us').style.display = 'block';
	return false;
};

document.querySelector('.write-us-link').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('write-us').style.display = 'block';
});
	

let links = document.querySelectorAll('.services-container .modal-list li');
	links.forEach(function(elem) {
	elem.addEventListener('click', function(event) {
	event.preventDefault();
			
let id = elem.getAttribute('data-toggle');
			
let blocks = document.querySelectorAll('.services li');
	blocks.forEach(function(elem) {
	elem.classList.remove('active');
	});
			
document.querySelector('.services li.' + id).classList.add('active');
		});
});
	




document.querySelectorAll('.promo-slider .promo-slider-head .promo-slogan').showSlide = function(event) {
	event.changeSlide(event, index);

let slideShow = document.querySelector('.promo-slider'); 
let slideHead = document.querySelector('.promo-slider-head');
let slideText = document.querySelector('.promo-slogan') {
			isAutoplay: true,
        	directionAutoplay: 'next',
        	delayAutoplay: 5000,
        	isPauseOnHover: true;
});

	config = {
        	isAutoplay: true, // автоматическая смена слайдов
        	directionAutoplay: 'next', // направление смены слайдов
        	delayAutoplay: 5000, // интервал между автоматической сменой слайдов
        	isPauseOnHover: true // устанавливать ли паузу при поднесении курсора к слайдеру
      });
			
	function changeSlide(event, index) {
    	let slideShow = document.querySelector('.promo-slider');
		let slideHead = document.querySelector('.promo-slider-head');
		let slideText = document.querySelector('promo-slogan') {
        	
    };