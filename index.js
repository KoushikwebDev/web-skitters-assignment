const swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 0,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    clickable: true,
  },
  autoplay: {
    delay: 1000,
    disableOnInteraction: true,
  },
});

const mySwipper = document.querySelector(".mySwiper");
mySwipper.addEventListener("mouseenter", () => {
  mySwipper.swiper.autoplay.stop();
});

mySwipper.addEventListener("mouseleave", () => {
  mySwipper.swiper.autoplay.start();
});

const slides = document.querySelectorAll(".slider-product");

slides.forEach((slide) => {
  slide.addEventListener("mouseenter", () => {
    slide.querySelector(".add-cart").classList.add("show");
  });

  slide.addEventListener("mouseleave", () => {
    slide.querySelector(".add-cart").classList.remove("show");
  });
});
