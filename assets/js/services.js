const track = document.querySelector(".industries-track");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");
const items = document.querySelectorAll(".industry-item");

let index = 0;
const visible = 3;
const total = items.length;

function updateCarousel() {
  const itemWidth = items[0].offsetWidth + 40; // 40px gap
  track.style.transform = `translateX(${-index * itemWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % (total - visible + 1);
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + (total - visible + 1)) % (total - visible + 1);
  updateCarousel();
});

// Auto rotate every 7s
setInterval(() => {
  index = (index + 1) % (total - visible + 1);
  updateCarousel();
}, 12000);

window.addEventListener("resize", updateCarousel);
