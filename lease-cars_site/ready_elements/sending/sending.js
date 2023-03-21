const elementName=document.querySelector(".contact-us__input-name");
const elementEmail=document.querySelector(".contact-us__input-email");

const elementNamePos=elementName.getBoundingClientRect().top + window.pageYOffset;
const elementEmailPos=elementEmail.getBoundingClientRect().top + window.pageYOffset;

const newPositionName=elementNamePos-190;
const newPositionEmail=elementEmailPos-190; 

let valid=true;

function sendForm() {
	
	if (document.forms[0].name.value == "") {
		alert('Please enter your name');
		window.scrollTo({
			top: newPositionName, 
			behavior: "smooth"
		});
		elementName.focus();
		valid=false;
		} else if (document.forms[0].email.value == "") {
		alert('Please enter your email');
		window.scrollTo({
			top: newPositionEmail, 
			behavior: "smooth"
		});
			elementEmail.focus();
			valid=false;
		}
	
	if(valid){
		alert("Sent")
	}
}