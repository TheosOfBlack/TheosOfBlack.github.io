// Анимация появления разных видов КАРТОЧЕК по верхним кнопкам сверху
let btnCar=document.querySelector(".choose__btn-1");
let btnTrucks=document.querySelector(".choose__btn-2");
let btnCross=document.querySelector(".choose__btn-3");
let btnElectr=document.querySelector(".choose__btn-4");

let itemsCar=document.querySelector(".choose__items-car");
let itemsTrucks=document.querySelector(".choose__items-trucks");
let itemsCross=document.querySelector(".choose__items-cross");
let itemsElectr=document.querySelector(".choose__items-electr");

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
	}
	if(n=="Trucks"){
		document.querySelector(".choose__btn-active").classList.remove("choose__btn-active");
		btnTrucks.classList.add("choose__btn-active");
		// Анимация появляющихся карточек
		document.querySelector(".choose__items-active").classList.add("choose__items-hidden");
		document.querySelector(".choose__items-active").classList.remove("choose__items-active");
		itemsTrucks.classList.remove("choose__items-hidden");
		itemsTrucks.classList.add("choose__items-active");
	}
	if(n=="Cross"){
		document.querySelector(".choose__btn-active").classList.remove("choose__btn-active");
		btnCross.classList.add("choose__btn-active");
		// Анимация появляющихся карточек
		document.querySelector(".choose__items-active").classList.add("choose__items-hidden");
		document.querySelector(".choose__items-active").classList.remove("choose__items-active");
		itemsCross.classList.remove("choose__items-hidden");
		itemsCross.classList.add("choose__items-active");
	}
	if(n=="Electr"){
		document.querySelector(".choose__btn-active").classList.remove("choose__btn-active");
		btnElectr.classList.add("choose__btn-active");
		// Анимация появляющихся карточек
		document.querySelector(".choose__items-active").classList.add("choose__items-hidden");
		document.querySelector(".choose__items-active").classList.remove("choose__items-active");
		itemsElectr.classList.remove("choose__items-hidden");
		itemsElectr.classList.add("choose__items-active");
	}
}
// Анимация отображения большего кол-во КАРТОЧЕК при нажатие на кнопку show more и их скрытие
let maxLines = 3;
let chooseButtons = document.querySelectorAll(".choose__btn");
let choosebtnShow = document.querySelector(".choose__btn-show");

function lineHidden(){
	let lines = document.querySelector(".choose__items-active").querySelectorAll(".choose__items-line");
	let numbersLines = lines.length;
	for(let i=maxLines;i<numbersLines;i++){
		lines[i].classList.remove("choose__line-active");
		lines[i].classList.add("choose__line-hidden");
	}
	choosebtnShow.classList.remove("btn-show-disabled");
}
for (let button of chooseButtons){
	button.addEventListener("click", lineHidden);
}
function chooseShowMore(){
	let hiddenLines = document.querySelectorAll(".choose__line-hidden");
	let hiddenLinesLength = hiddenLines.length;
	if(hiddenLinesLength>4){
		for (let i=1;i<4;i++){
			hiddenLines[i].classList.remove("choose__line-hidden");
			hiddenLines[i].classList.add("choose__line-active");
		}
		if(i==hiddenLinesLength){
			choosebtnShow.classList.add("btn-show-disabled");
		}
	} else {
		for (let hiddenLine of hiddenLines) {
			hiddenLine.classList.remove("choose__line-hidden");
			hiddenLine.classList.add("choose__line-active");
		}
		choosebtnShow.classList.add("btn-show-disabled");
	}
} 