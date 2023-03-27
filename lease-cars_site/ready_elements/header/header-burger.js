let header = document.querySelector(".header");
let menu = document.querySelector(".menu");
let menuItems = document.querySelectorAll(".menu__item");

let btnBureger = document.querySelector(".menu__bureger");

let lineBurger1 = document.querySelector(".menu__line-1");
let lineBurger2 = document.querySelector(".menu__line-2");
let lineBurger3 = document.querySelector(".menu__line-3");

let scrollDistance = window.pageYOffset;

function buregerClick() {
	if(lineBurger1.classList.contains("menu__line-1-active")){
		lineBurger1.classList.remove("menu__line-1-active");
		lineBurger2.classList.remove("menu__line-2-active");
		lineBurger3.classList.remove("menu__line-3-active");
		menu.classList.remove("menu-active");

		for(item of menuItems){
			item.classList.remove("menu__item-active");
		}
		return;
	}
	lineBurger1.classList.add("menu__line-1-active");
	lineBurger2.classList.add("menu__line-2-active");
	lineBurger3.classList.add("menu__line-3-active");
	menu.classList.add("menu-active");
	header.style.backgroundColor="#151515";

	for(item of menuItems){
		item.classList.add("menu__item-active");
	}
}