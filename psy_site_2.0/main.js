// Изменение bacground хедера
const containerHeader = document.querySelector('.header__container');
let scrollDistance = null;
 
window.addEventListener('load', ()=>{
	scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	console.log(scrollTop);
	if(scrollTop>1){
		containerHeader.classList.add('header__container-active');
	}
})

if((window.innerWidth)>901){
	window.addEventListener('scroll', () => {
		scrollDistance = scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

			if (scrollDistance > 1) {
				containerHeader.classList.remove('header__container-noactive');
				containerHeader.classList.add('header__container-active');
			} else {
				containerHeader.classList.remove('header__container-active');
				containerHeader.classList.add('header__container-noactive');
			}
	})
} else {
	containerHeader.classList.add('header__container-active');
}

const phoneMask = IMask(document.getElementById('telephone'), {
	mask: '+{7} (000) 000-00-00'
});

const TOKEN = '5847190166:AAE0PNe1Epv3Np-EVfZInPYJM61BK1whX80';
const CHAT_ID = '-1001867759914';
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const success = document.getElementById('success');

document.querySelector('.form').addEventListener('submit', function(e){
	e.preventDefault();

	let message = `<b>Заявка с сайта</b>\n`;
	message += `<b>Имя: </b> ${ this.name.value }\n`;
	message += `<b>Телефон: </b> ${ this.telephone.value }\n`;
	message += `<b>Сообщение: </b> ${ this.problem.value }`;

	axios.post(URL_API, {
		chat_id: CHAT_ID,
		parse_mode: 'html',
		text: message
	})
	.then((res) => {
		this.name.value = '';
		this.telephone.value = '';
		this.problem.value = '';
		success.style.opacity = 1;
		setTimeout(()=>{
			success.style.opacity = 0;
		}, 5000)
	})
	.catch((err) => {
		console.warn(err);
	})
})

const items = document.querySelectorAll('.item')

const expand = (item, i) => {
  items.forEach((it, ind) => {
    if (i === ind) return
    it.clicked = false
  })
  gsap.to(items, {
    width: item.clicked ? '15vw' : '8vw',
    duration: 2,
    ease: 'elastic(1, .6)'
  })
  
  item.clicked = !item.clicked
  gsap.to(item, {
    width: item.clicked ? '42vw' : '15vw',
    duration: 2.5,
    ease: 'elastic(1, .3)'
  })
}

items.forEach((item, i) => {
  item.clicked = false
  item.addEventListener('click', () => expand(item, i))
})

const burger = document.querySelector('.btn-burger');
const nav = document.querySelector('.nav');
const headerInner = document.querySelector('.header-inner')

const lineBurger1 = document.querySelector(".header-line-1");
const lineBurger2 = document.querySelector(".header-line-2");
const lineBurger3 = document.querySelector(".header-line-3");

burger.addEventListener('click', ()=>{
	if(nav.classList.contains('nav-active')){
		nav.classList.remove('nav-active');
		nav.classList.add('nav-unactive');
		headerInner.classList.remove('header-inner-active');
		headerInner.classList.add('header-inner-unactive');

		lineBurger1.classList.remove("header-line-1-active");
		lineBurger2.classList.remove("header-line-2-active");
		lineBurger3.classList.remove("header-line-3-active");
	} else {
		nav.classList.add('nav-active');
		nav.classList.remove('nav-unactive');
		headerInner.classList.add('header-inner-active');
		headerInner.classList.remove('header-inner-unactive');

		lineBurger1.classList.add("header-line-1-active");
		lineBurger2.classList.add("header-line-2-active");
		lineBurger3.classList.add("header-line-3-active");
	}
})