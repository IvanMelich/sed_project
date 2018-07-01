var menu = document.querySelector('.navigation');
var menuOpen = document.querySelector('.navigation-default__burger');
var menuClose = document.querySelector('.cros-menu');

menu.classList.add('menu-default');

menuOpen.addEventListener('click', function () {
	//event.preventDefault();
		menu.classList.remove('menu-default');
});

menuClose.addEventListener('click', function () {
	//event.preventDefault();
		menu.classList.add('menu-default');
});

	













