const fullPath=window.location.pathname;
const pathArray=fullPath.split('/');
const fileName=pathArray[pathArray.length-1];

function anchorScroll(anchorId) {

	if(fileName!=='index.html'){
		window.location.assign('../index.html#'+anchorId);
	}
	
	let itemAnchor=document.querySelector(anchorId);
	let scrollHeight=(itemAnchor.offsetTop-140);

	window.scroll({
		top: scrollHeight,
		behavior: 'smooth'
	});
};

if (window.location.hash.substring(1)!=='') {
	window.onload = function() {
		const scrollToElement = window.location.hash.substring(1);
		const itemAnchor = document.getElementById(scrollToElement);
		const scrollHeight = itemAnchor.offsetTop - 140;

		window.scroll({
			top: scrollHeight,
			behavior: 'smooth'
		});
	}
}