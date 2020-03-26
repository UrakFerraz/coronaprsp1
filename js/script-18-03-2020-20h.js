let slides = document.querySelectorAll('.slideUnit');

slides = Array.from(slides);

console.log(slides);

cont = 0;

function nextSlide() {
	console.log(cont);
	if(cont >= slides.length -1) {
		cont = 0;
		slides.forEach(function(el) {
			el.style.transform = 'translateX(-' + cont + '00%)';
		});
	} else {
		cont++;
		slides.forEach(function(el) {
			el.style.transform = 'translateX(-' + cont + '00%)';
		});
	}
};

function prevSlide() {
	console.log(cont);
	if(cont <= 0) {
		cont = slides.length -1;
		slides.forEach(function(el) {
			el.style.transform = 'translateX(-' + cont + '00%)';
		});
	} else {
		cont--;
		slides.forEach(function(el) {
			el.style.transform = 'translateX(-' + cont + '00%)';
		});
	}
};









let slideTimer;

function automate() {
	slideTimer = setInterval(nextSlide, 5000);
};

automate();

document.querySelector('.arrowRight').addEventListener('click', nextSlide);
document.querySelector('.arrowLeft').addEventListener('click', prevSlide);

document.querySelector('.slideContainer').addEventListener('mouseover', function() {
	clearInterval(slideTimer);
	console.log('pause');
});

document.querySelector('.slideContainer').addEventListener('mouseleave', function() {
	automate();
	console.log('restart');
});

document.querySelector('.arrowLeft').addEventListener('mouseover', function() {
	clearInterval(slideTimer);
	console.log('pause');
});

document.querySelector('.arrowRight').addEventListener('mouseover', function() {
	clearInterval(slideTimer);
	console.log('pause');
});




















let noImgNewsShareBtns = document.querySelectorAll('.noImgNewsShareBtn');



document.body.addEventListener('click', function(el) {
	if(el.target.classList.contains('noImgNewsShareBtn')) {
		if(el.target.nextElementSibling.classList.contains('noImgSocialShare-Disable')) {
			return el.target.nextElementSibling.classList.remove('noImgSocialShare-Disable');
		} else {
			return el.target.nextElementSibling.classList.add('noImgSocialShare-Disable');
		};
	};
});























document.querySelector('.hamburguerMenuBtn').addEventListener('click', function() {
	document.querySelector('.mobileMenuContainer').style.left = '0';
});


document.querySelector('.mobileMenuCloseBtn').addEventListener('click', function() {
	document.querySelector('.mobileMenuContainer').style.left = '-102%';
});







// function socialLabels() {
// 	let items = document.querySelectorAll('amp-social-share');
// 	items = Array.from(items);
// 	items.forEach(function(el) {
// 		el.setAttribute('aria-label', 'socialLinks');
// 	});
// };