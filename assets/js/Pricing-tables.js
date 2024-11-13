/* ----------------------------------------------
	Item Name: Sava - Creative pricing tables
	Author: Ashish Maraviya
	Version: 2.1
	Copyright 2021-2022
---------------------------------------------- */
$(function () {
	'use strict';
	

	// Start Owl carousel
	var screenshot = $(".owl-carousel-plan");
    screenshot.owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:true,
        center:false,
        autoplay: true,
        autoplayTimeout: 8000,
        responsive:{
            0:{
                items:1,
			},
            576:{
                items:2,
			},
            768:{
                items:2,
			},
            992:{
                items:3,
			},
            1200:{
                items:4
			}
		}
	})
	// End Owl carousel
});