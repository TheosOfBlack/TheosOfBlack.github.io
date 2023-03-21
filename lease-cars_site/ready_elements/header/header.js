// Скролл шапки изменение background-color
window.addEventListener('scroll', function() {
  var scrollDistance = window.pageYOffset;
  if (scrollDistance > 25) {
    document.querySelector(".header").style.backgroundColor="#151515";
  } else {
		document.querySelector(".header").style.backgroundColor="transparent";
	}
});
// Скролл шапки изменение background-color