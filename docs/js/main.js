/**
 * as agreed, here we have a function that manages n carousels, currently 2, in a modularized way.
 */
$(document).ready(function() {
    function rotateSlides(direction, carousel) {
        let carouselChildrens = $(carousel).find(".carousel-item");
        let actualIndex = $(carousel).attr('data-index');
        let nextIndex = parseInt(actualIndex) + direction;
        let maxIndex = carouselChildrens.length - 1;
        if (nextIndex > maxIndex) {
            nextIndex = 0;
        } else if (nextIndex < 0) {
            nextIndex = maxIndex;
        }

        changeActualSlide(nextIndex, carousel);
    }

    function changeActualSlide(index, carousel) {
        let carouselChildrens = $(carousel).children('.carousel-item');
        let actualIndex = $(carousel).attr('data-index');
        $(carousel).attr('data-index', index);
        
        let actualSlide = carouselChildrens[actualIndex];
        let nextSlide = carouselChildrens[index];


        $(actualSlide).css("transition", "0.6s");
        $(actualSlide).css("margin-top", "100%");

        $(nextSlide).css("transition", "0s");
        $(nextSlide).css("margin-top", "-100%");
        window.setTimeout(() => {
            $(nextSlide).css("transition", "0.8s");
            $(nextSlide).css("margin-top", "0px");
        }, 1);        
            
    }
    
    $('.carousel').each((index) => {
        let carousel = $('.carousel')[index];
        let height = 0;
        let carouselItemLenght = $(carousel).children('.carousel-item').length;
        $(carousel).children('.carousel-item').each((index) => {
            let carouselItem = $(carousel).children('.carousel-item')[index];
            height = height + parseInt($(carouselItem).css("height"));
        });
        let carouselHeight = (height / carouselItemLenght) + 10;

        $(carousel).css("height", (carouselHeight + "px"));
        window.setInterval(() => {rotateSlides(1, carousel)}, 5000);
        rotateSlides(0, $(carousel));
    });
});