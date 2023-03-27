// Анимация появления разных видов КАРТОЧЕК по верхним кнопкам сверху
let btnCar=document.querySelector(".choose__btn-1");
let btnTrucks=document.querySelector(".choose__btn-2");
let btnCross=document.querySelector(".choose__btn-3");
let btnElectr=document.querySelector(".choose__btn-4");

let itemsCar=document.querySelector(".choose__items-car");
let itemsTrucks=document.querySelector(".choose__items-trucks");
let itemsCross=document.querySelector(".choose__items-cross");
let itemsElectr=document.querySelector(".choose__items-electr");

let choosebtnShow = document.querySelector(".choose__btn-show");

function chooseClick(n) {
	if(n=="Car"){
		// Анимация кнопок
		document.querySelector(".choose__btn-active").classList.remove("choose__btn-active");
		btnCar.classList.add("choose__btn-active");
		// Анимация появляющихся карточек
		document.querySelector(".choose__items-active").classList.add("choose__items-hidden");
		document.querySelector(".choose__items-active").classList.remove("choose__items-active");
		itemsCar.classList.remove("choose__items-hidden");
		itemsCar.classList.add("choose__items-active");

		choosebtnShow.classList.remove("btn-show-disabled");
	}
	if(n=="Trucks"){
		document.querySelector(".choose__btn-active").classList.remove("choose__btn-active");
		btnTrucks.classList.add("choose__btn-active");
		// Анимация появляющихся карточек
		document.querySelector(".choose__items-active").classList.add("choose__items-hidden");
		document.querySelector(".choose__items-active").classList.remove("choose__items-active");
		itemsTrucks.classList.remove("choose__items-hidden");
		itemsTrucks.classList.add("choose__items-active");

		choosebtnShow.classList.remove("btn-show-disabled");
	}
	if(n=="Cross"){
		document.querySelector(".choose__btn-active").classList.remove("choose__btn-active");
		btnCross.classList.add("choose__btn-active");
		// Анимация появляющихся карточек
		document.querySelector(".choose__items-active").classList.add("choose__items-hidden");
		document.querySelector(".choose__items-active").classList.remove("choose__items-active");
		itemsCross.classList.remove("choose__items-hidden");
		itemsCross.classList.add("choose__items-active");

		choosebtnShow.classList.remove("btn-show-disabled");
	}
	if(n=="Electr"){
		document.querySelector(".choose__btn-active").classList.remove("choose__btn-active");
		btnElectr.classList.add("choose__btn-active");
		// Анимация появляющихся карточек
		document.querySelector(".choose__items-active").classList.add("choose__items-hidden");
		document.querySelector(".choose__items-active").classList.remove("choose__items-active");
		itemsElectr.classList.remove("choose__items-hidden");
		itemsElectr.classList.add("choose__items-active");

		choosebtnShow.classList.remove("btn-show-disabled");
	}
}
// Анимация отображения большего кол-во КАРТОЧЕК при нажатие на кнопку show more и их скрытие
let maxElementsVisible = 12;

function chooseShowMore(){
	let chooseItemsActive = document.querySelector(".choose__items-active");
	let itemsHidden = chooseItemsActive.querySelectorAll(".choose__item-hidden");
	let itemsHiddenLength = itemsHidden.length;

	if(itemsHiddenLength==0){
		choosebtnShow.classList.add("btn-show-disabled");
		return;
	}

	if(itemsHiddenLength<maxElementsVisible){
		maxElementsVisible=itemsHiddenLength;
	}
	
	for(let i=0; i<maxElementsVisible;i++){
		itemsHidden[i].classList.remove("choose__item-hidden");
		itemsHidden[i].classList.add("choose__item-active");
	}
} 