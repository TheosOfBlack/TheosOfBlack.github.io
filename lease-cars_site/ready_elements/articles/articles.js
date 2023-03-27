// Анимация отображения большего кол-во СТАТЕЙ при нажатие на кнопку show more и их скрытие
let maxLinesArticles = 1;
let linesArticles = document.querySelectorAll(".articles-line");
let numbersLinesArticles = linesArticles.length;

let articlesBtn = document.querySelector(".articles__btn-show");
let l = 1;

function articlesShowMore(){
	if(l<numbersLinesArticles){
		linesArticles[l].classList.remove("articles__line-hidden");
		linesArticles[l].classList.add("articles__line-active");
		l++;
	}
	if(l==numbersLinesArticles){
		articlesBtn.classList.add("btn-show-disabled");
	}
}