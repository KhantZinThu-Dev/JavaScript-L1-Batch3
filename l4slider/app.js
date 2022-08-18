let slides = document.getElementsByClassName("carousel-item");
// console.log(slides); // HTMLCollection
let dots = document.querySelectorAll(".dot");
// console.log(dots); // NodeList

let currentSlide = 1;

// Previous Icon Button
document.getElementById("prev").addEventListener("click", function () {
  carousel((currentSlide -= 1));
});

// Next Icon Button
document.getElementById("next").addEventListener("click", function () {
  carousel((currentSlide += 1));
});

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
    currentSlide = this.getAttribute("data-bs-slide-to");
    carousel(currentSlide);
  });
}

carousel(currentSlide);

function carousel(slideNum) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    // dots[i].className = "dot";
    // dots[i].className.replace("active", "");
    dots[i].classList.remove("active");
  }

  if (slideNum > slides.length) {
    currentSlide = 1;
  } else if (slideNum < 1) {
    currentSlide = slides.length;
  }

  console.log(currentSlide);

  slides[currentSlide - 1].style.display = "block";

  // dots[currentSlide - 1].className = "dot active";
  // dots[currentSlide - 1].className += " active";
  dots[currentSlide - 1].classList.add("active");
}
