// hamburger menu

const hamMenu = document.querySelector('.hamburger-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const navElement = document.querySelector('nav');
const logoElement = document.querySelector('.Logo'); // Assuming your logo has the class "Logo"

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');

  if (offScreenMenu.classList.contains('active')) {
    // Menu is open: hide logo and change nav background color
    if (logoElement) {
      logoElement.style.opacity = '0';
      logoElement.style.visibility = 'hidden';
    }
    const offScreenBgColor = window.getComputedStyle(offScreenMenu).backgroundColor;
    navElement.style.backgroundColor = offScreenBgColor;
  } else {
    // Menu is closed: show logo and revert nav background color
    if (logoElement) {
      logoElement.style.opacity = '1';
      logoElement.style.visibility = 'visible';
    }
    navElement.style.backgroundColor = '#fff'; // Or whatever your default nav background color is
  }
});

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





