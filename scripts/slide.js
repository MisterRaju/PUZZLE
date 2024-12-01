// JavaScript for Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const slideNav = document.getElementById("slideNav");
const closeBtn = document.getElementById("closeBtn");

// Toggle the "open" class on the sliding menu when the hamburger is clicked
hamburger.addEventListener("click", () => {
  slideNav.classList.toggle("open");
});

// Close the sliding menu when the "X" button is clicked
closeBtn.addEventListener("click", () => {
  slideNav.classList.remove("open");
});

// Close the sliding menu when clicking outside of it
document.addEventListener("click", (event) => {
  if (!slideNav.contains(event.target) && !hamburger.contains(event.target)) {
    slideNav.classList.remove("open");
  }
});
