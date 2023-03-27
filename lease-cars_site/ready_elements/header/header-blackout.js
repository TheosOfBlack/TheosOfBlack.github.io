// Скролл шапки изменение background-color
window.addEventListener('scroll', function() {
	if(!document.querySelector(".menu__line-1").classList.contains("menu__line-1-active")){
		let scrollDistance = window.pageYOffset;
		if (scrollDistance > 25) {
			document.querySelector(".header").style.backgroundColor="#151515";
		} else {
			document.querySelector(".header").style.backgroundColor="transparent";
		}
	}
});
// Скролл шапки изменение background-color