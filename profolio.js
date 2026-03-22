const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.88;

  reveals.forEach((item) => {
    const top = item.getBoundingClientRect().top;

    if (top < triggerBottom) {
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const anglerCursor = document.getElementById("anglerCursor");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let currentX = mouseX;
let currentY = mouseY;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateAnglerCursor() {
  currentX += (mouseX - currentX) * 0.18;
  currentY += (mouseY - currentY) * 0.18;

  anglerCursor.style.left = currentX + "px";
  anglerCursor.style.top = currentY + "px";

  requestAnimationFrame(animateAnglerCursor);
}

animateAnglerCursor();

/* 滑到可點擊元素時，魚變大一點 */
const interactiveElements = document.querySelectorAll("a, button, .project-card, .btn");

interactiveElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    anglerCursor.classList.add("hover");
  });

  el.addEventListener("mouseleave", () => {
    anglerCursor.classList.remove("hover");
  });
});