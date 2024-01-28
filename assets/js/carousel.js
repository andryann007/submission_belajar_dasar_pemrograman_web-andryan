var index = 1;
showPortfolio(index);

function nextPortfolio(n) {
    showPortfolio(index += n)
}

function previousPortfolio(n) {
    showPortfolio(index -= n)
}

function currentPortfolio(n) {
    showPortfolio(index = n)
}

function showPortfolio(n) {
    var i;
    var slides = document.getElementsByClassName("carousel-item");
    var dots = document.getElementsByClassName("carousel-dot");

    if (n > slides.length) { index = 1 }
    if (n < 1) { index = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[index - 1].style.display = "block";
    dots[index - 1].className += " active";
}