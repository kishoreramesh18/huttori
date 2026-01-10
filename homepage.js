let slideIndex = 0;
showSlides();

// Auto-slide every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);

function showSlides() {
    const slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].style.opacity = "0";
        slides[i].style.transition = "opacity 0.8s ease";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(() => {
        slides[slideIndex - 1].style.opacity = "1";
    }, 50);
}

function changeSlide(n) {
    slideIndex += n - 1;
    showSlides();
}
