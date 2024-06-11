let slideIdx = 1;
let autoplay;

function changeSlide(ctrl) {
    showSlides(slideIdx + ctrl);
}

function showSlides(idx) {
    slideIdx = idx;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if(slideIdx > slides.length) {
        slideIdx = 1;
    }else if(slideIdx == 0) {
        slideIdx = slides.length;
    }
    for(let i=0; i<slides.length; i++) {
        slides[i].className = slides[i].className.replace(" show", "")
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIdx - 1].className += " show";
    dots[slideIdx - 1].className += " active";
    setAutoPlay();
}

function setAutoPlay() {
    if(autoplay != undefined) clearInterval(autoplay);
    autoplay = setInterval(function() {
        changeSlide(1);
    }, 2500);
}

window.onload = function() {
    showSlides(slideIdx);
}