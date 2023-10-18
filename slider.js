// slider.js
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const images = document.querySelectorAll(".slider img");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const prevArrow = document.getElementById("prevArrow");
  const nextArrow = document.getElementById("nextArrow");
  let currentIndex = 0;
  let timer;

  // Function to show the current image
  function showImage() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  //preload image
  const imageSources = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
  ];
  const preloadedImages = [];

  imageSources.forEach((src) => {
    const img = new Image();
    img.src = src;
    preloadedImages.push(img);
  });

  // Function to show the next image
  function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    showImage();
    clearInterval(timer);
    timer = setInterval(nextImage, 2000);
  }

  // Function to show the previous image
  function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    showImage();
    clearInterval(timer);
    timer = setInterval(nextImage, 2000);
  }

  // Automatically switch to the next image every 2 seconds
  timer = setInterval(nextImage, 2000);

  // Event listener for the "Next" button
  nextBtn.addEventListener("click", nextImage);

  // Event listener for the "Previous" button
  prevBtn.addEventListener("click", prevImage);

  // Event listener for the left arrow key
  prevArrow.addEventListener("click", function (e) {
    e.preventDefault();
    prevImage();
  });

  // Event listener for the right arrow key
  nextArrow.addEventListener("click", function (e) {
    e.preventDefault();
    nextImage();
  });
});
