"use strict";

const slider = {
    images: ["img/1.jpg", "img/2.jpg"],
    linkOnPage: document.querySelector(".slider"),

    paint() {
        this.images.forEach( (elem) => {

            let slide = document.createElement('img');

            slide.src = elem;
            slide.classList.add("slide");

            this.linkOnPage.append(slide);
        })
    },
};

slider.paint();