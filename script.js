// hamburger menu

const hamMenu = document.querySelector('.hamburger-menu')

const offScreenMenu = document.querySelector('.off-screen-menu')

hamMenu.addEventListener('click', ()=>{
    hamMenu.classList.toggle('active')
    offScreenMenu.classList.toggle('active')
})

// image slider

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot-active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " dot-active";
}

// references
// https://youtu.be/749ta0nvj8s?si=vA4pkwph3JbIpqkU
// https://youtu.be/aNDqzlAKmZc?si=0qOb6X1ahTb2jhPg
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow





