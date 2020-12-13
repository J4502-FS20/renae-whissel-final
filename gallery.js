"use strict";

var selectedImg = document.getElementById("selected_img");

var images = document.getElementsByClassName("image");

selectedImg.innerHTML = images[0].innerHTML;

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function() {
    selectedImg.innerHTML = this.innerHTML;

var photoDivs = document.getElementsByClassName("imageHolder");

var nextButton = document.getElementById(button_next);

var previousButton = docomunt.getElementById(button_previous);

var currentPhotoNumber = currentPhotoNumber;

photoDivs[currentPhotoNumber].classList.remove('hideThisDiv');

nextButton.addEventListener('click', function() {
  photoDivs[currentPhotoNumber].classList.add(hideThisDiv)
  currentPhotoNumber = currentPhotoNumber + 1;

  if (currentPhotoNumber === photoDivs.length){
    curentPhotoNumber = 0;
  }
  photoDivs[currentPhotoNumber.classList.remove('hideThisDiv')]
});

previosButton.addEventListener('click', function() {
  photoDivs[currentPhotoNumber].classList.add("hideThisDiv");
  currentPhotoNumber - 1;

  if(currentPhotoNumber <0) {
    currentPhotoNumber = photoDivs.length - 1;
  }
  photoDivs[currentPhotoNumber].classList.remove('hideThisDiv')
})
  });
}
