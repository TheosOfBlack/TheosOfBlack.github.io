// Слайдера
let i=1;

let maxLength=document.querySelectorAll(".slider__number").length;

function sliderBackgroundImg(){
	if(i==0){
		document.querySelector(".slider__number-"+maxLength).classList.remove("slider__number-active");
	}
	i++;
	document.querySelector(".slider").style.backgroundImage="url(page_index/images/slider" + i + ".jpg)";

	document.querySelector(".slider__number-"+i).classList.add("slider__number-active");

	if(i!=1){
		document.querySelector(".slider__number-"+(i-1)).classList.remove("slider__number-active");
	}

	if(i==maxLength){
		i=0;
	}
};
setInterval(sliderBackgroundImg,3000);
// Слайдер