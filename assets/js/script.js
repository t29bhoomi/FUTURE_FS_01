'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(() => loader.style.display = "none", 500);
});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
const texts = ["Bhoomi Takke", "Web Developer", "Frontend Developer"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const typingEl = document.getElementById("typing-text");

function type() {
  const current = texts[index];
  if (isDeleting) {
    typingEl.textContent = current.substring(0, charIndex--);
  } else {
    typingEl.textContent = current.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === current.length + 1) {
    isDeleting = true;
    setTimeout(type, 1500);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % texts.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();