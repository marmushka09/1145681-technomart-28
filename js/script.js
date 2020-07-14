document.addEventListener('DOMContentLoaded', function(){

document.querySelector('.write-us-link').addEventListener('click', function(event) {
event.preventDefault();
document.getElementById('write-us').style.display = 'block';
});

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
});	

let closeButton = document.querySelector('.modal-close');
	closeButton.addEventListener("click", function() {
	  modal.classList.toggle("closed");
	  modalOverlay.classList.toggle("closed");
	});
