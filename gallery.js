"use strict";

var photoDivs = document.getElementsByClassName("imageHolder");

var selectedImg = document.getElementById("selected_img");

var images = document.getElementsByClassName("image");

selectedImg.innerHTML = images[0].innerHTML;

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function() {
    selectedImg.innerHTML = this.innerHTML;
  });
}
