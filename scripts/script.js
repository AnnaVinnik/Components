"use strict";

const slider = {
    images: ["img/1.jpg", "img/2.jpg"],
    linkOnPage: document.querySelector(".slider"),

    create() {
        this.images.forEach( (elem) => {
            createSlide.call(this, elem);
        });

        function createSlide(elem) {
            let slide = document.createElement('img');

            slide.src = elem;
            slide.classList.add("slide");

            this.linkOnPage.append(slide);
        }

    },
};

slider.create();