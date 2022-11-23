const myslide = document.querySelectorAll('.myslide'),
      dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {

    let i;
    for(i = 0;i<myslide.length;i++){
    	myslide[i].style.display = "none";
    }
    for(i = 0;i<dot.length;i++) {
    	dot[i].className = dot[i].className.replace(' active', '');
    }
    if(n > myslide.length){
    	counter = 1;
        }
    if(n < 1){
    	counter = myslide.length;
        }
    myslide[counter - 1].style.display = "block";
    dot[counter - 1].className += " active";
}


function userValidation()
{

var country = document.myForm.country.value;
var age = document.myForm.age.value;


if(country=="New Zealand" && age>=18) {
    window.open ('file:///C:/Users/SaicoNoob/Desktop/Assignment%201/root/index.html')
}
else
alert("Sorry you are not able to shop with us")

}