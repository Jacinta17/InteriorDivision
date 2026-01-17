/* MAIN FORM */
const mainForm = document.getElementById("contactForm");
const mainStatus = document.getElementById("formStatus");

if (mainForm) {
  mainForm.addEventListener("submit", e => {
    e.preventDefault();
    mainStatus.textContent = "Thank you! Our team will contact you shortly.";
    mainStatus.style.color = "green";
    mainForm.reset();
  });
}

/* POPUP */
const popup = document.getElementById("consultPopup");
const closePopup = document.getElementById("closePopup");

window.addEventListener("load", () => {
  setTimeout(() => popup.classList.add("active"), 600);
});

closePopup.addEventListener("click", () => {
  popup.classList.remove("active");
});

/* HAMBURGER */
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
});