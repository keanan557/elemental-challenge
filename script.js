// hamburger menu

const hamMenu = document.querySelector('.hamburger-menu')

const offScreenMenu = document.querySelector('.off-screen-menu')

hamMenu.addEventListener('click', ()=>{
    hamMenu.classList.toggle('active')
    offScreenMenu.classList.toggle('active')
})

// image slider

const slides = document.querySelectorAll('.image-slides img')

let slideIndex = 0

let intervalId = null

// initializeSlider()
document.addEventListener('DOMContentLoaded',initializeSlider)


function initializeSlider(){

    if(slides.length > 0){
        slides[slideIndex].classList.add('displaySlide')
        intervalId = setInterval(rightSlide, 5000)
    }


}

function showSlide(index){


    if(index >= slides.length){
        slideIndex = 0
    }

    else if(index < 0){
        slideIndex = slides.length - 1
    }

    slides.forEach(slide => {
        slide.classList.remove('displaySlide')
    })
    slides[slideIndex].classList.add('displaySlide')

}

function leftSlide(){
    clearInterval(intervalId)
    slideIndex--
    showSlide(slideIndex)
}

function rightSlide(){
    slideIndex++
    showSlide(slideIndex)
}

// references
// https://youtu.be/749ta0nvj8s?si=vA4pkwph3JbIpqkU
// https://youtu.be/aNDqzlAKmZc?si=0qOb6X1ahTb2jhPg




