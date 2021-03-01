// var show2020 = function(event){
// 	var text = document.getElementById("about-text");
// 	if (text.classList.contains("hide") == true){
// 		text.style.height = "auto";
// 		text.classList.remove("hide");
// 	} else{
// 		text.style.height = 0;
// 		text.classList.add("hide");
// 	};
// }; 


// CHANGE FOOTER YEAR HERE
document.getElementById('year').innerHTML = "RISD IDSA 2021";

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  var thisSlide = slides[slideIndex-1];
  thisSlide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })

}

//   setInterval(() => {
//   plusSlides(1);
// }, 7000);