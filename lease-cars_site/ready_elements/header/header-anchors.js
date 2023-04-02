const fullPath=window.location.pathname;
const pathArray=fullPath.split('/');
const fileName=pathArray[pathArray.length-1];

function anchorScroll(anchorSelector) {

	if(fileName!=='index.html'){
		let anchorId=anchorSelector.substring(1,anchorSelector.length);
		window.location.assign('../index.html#'+anchorId);
	}
	
	let itemAnchor=document.querySelector(anchorSelector);
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