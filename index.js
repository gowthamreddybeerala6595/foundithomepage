let currentIndex = 0;
const intervalTime = 2000; // Adjust as needed
const container = document.getElementById('carousel-container');
const items = document.querySelectorAll('.carousel-slide');
const totalItems = items.length;

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
}

function updateCarousel() {
  const translateValue = -currentIndex * (items[0].offsetWidth + 20); // 20 is the margin
  container.style.transform = `translateX(${translateValue}px)`;
}

function autoplay() {
  setInterval(nextSlide, intervalTime);
}

// Autoplay
autoplay();

const arrowBtns = document.querySelectorAll(".carousel-wrapper .arrow");
const carousel = document.querySelector(".carousel");

const firstCardWidth = carousel.querySelector(".carousel-item").offsetWidth;

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
  });
});

const toggleAccordion = (sectionId) => {
  const content = document.querySelector(`#${sectionId}`);
  const allContents = document.querySelectorAll(".accordion-content");

  content.style.display = content.style.display === "block" ? "none" : "block";

  allContents.forEach((item) => {
    if (item.id !== sectionId) {
      item.style.display = "none";
    }
  });
};
