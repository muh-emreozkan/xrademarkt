"use strict";

//Toggle navigation

var openNav = document.querySelector(".open-nav");
var closeNav = document.querySelector(".close-nav");
var asideNav = document.querySelector(".aside-nav-container")
var bodyOverlay = document.querySelector(".body-overlay");

openNav.addEventListener("click", function(){
	asideNav.classList.add("active");
	bodyOverlay.classList.add("active");
});
closeNav.addEventListener("click", function(){
	asideNav.classList.remove('active'),
	bodyOverlay.classList.remove('active')
});

//Split Screen Portfolio

let previews = {};
document.querySelectorAll(".portfolio-previews > div").forEach(
	function(element) {
		previews[element.getAttribute('data-portfolio-preview')] = element;
	}
)
document.querySelectorAll('.portfolio-links ul li').forEach(
	function(element) {
		element.addEventListener('mouseover', function(e) {
			let selectedIndex = element.getAttribute("data-portfolio-link");

			document.querySelector('.portfolio-links .active').classList.remove("active");
			element.childNodes[0].classList.add("active");

			document.querySelector('.portfolio-previews .active').classList.remove("active");
			previews[selectedIndex].classList.add("active");
		})
	}
)

const portfolioItems = document.querySelectorAll(".portfolio-item");

portfolioItems.forEach(function(item) {
  item.addEventListener("mouseenter", function() {
    this.querySelector(".portfolio-item-overlay").style.opacity = "1";
    this.querySelector(".portfolio-item-overlay").style.visibility = "visible";
  });

  item.addEventListener("touchstart", function() {
    this.querySelector(".portfolio-item-overlay").style.opacity = "1";
    this.querySelector(".portfolio-item-overlay").style.visibility = "visible";
  });

  item.addEventListener("touchmove", function() {
    this.querySelector(".portfolio-item-overlay").style.opacity = "0";
    this.querySelector(".portfolio-item-overlay").style.visibility = "hidden";
  });

  item.addEventListener("touchend", function() {
    this.querySelector(".portfolio-item-overlay").style.opacity = "1";
    this.querySelector(".portfolio-item-overlay").style.visibility = "visible";
  });

  item.addEventListener("mouseleave", function() {
    this.querySelector(".portfolio-item-overlay").style.opacity = "0";
    this.querySelector(".portfolio-item-overlay").style.visibility = "hidden";
  });

  var link = document.querySelector('a');
link.addEventListener('touchstart', function() {
    this.classList.add('hover');
});
link.addEventListener('touchend', function() {
    this.classList.remove('hover');
});

});

let linkItems = document.querySelectorAll(".portfolio-item");

linkItems.forEach(function(item) {
  item.addEventListener("touchstart", function() {
    this.classList.add('hover');
  });

  item.addEventListener("touchmove", function(e) {
    if (e.touches.length > 1) {
      this.classList.remove('hover');
    }
  });

  item.addEventListener("touchend", function() {
    this.classList.remove('hover');
  });
});

