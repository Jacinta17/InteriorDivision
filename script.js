document.addEventListener("DOMContentLoaded", () => {
  /* ------------------- MAIN CONTACT FORM ------------------- */
  const mainForm = document.getElementById("contactForm");
  const mainStatus = document.getElementById("formStatus");

  if (mainForm) {
    mainForm.addEventListener("submit", (e) => {
      e.preventDefault();
      mainStatus.textContent = "Thank you! Our team will contact you shortly.";
      mainStatus.style.color = "green";
      mainForm.reset();
    });
  }

  /* ------------------- POPUP FORM VALIDATION ------------------- */
  const popupForm = document.getElementById("popupForm");
  if (popupForm) {
    popupForm.addEventListener("submit", function (e) {
      const phoneInput = this.querySelector('input[type="tel"]');
      const phone = phoneInput.value.trim();

      // Strict 10-digit validation
      if (!/^\d{10}$/.test(phone)) {
        e.preventDefault();
        alert("Please enter a valid 10-digit phone number");
        phoneInput.focus();
      }
    });
  }

  /* ------------------- POPUP BEHAVIOR ------------------- */
  const popup = document.getElementById("consultPopup");
  const closePopup = document.getElementById("closePopup");

  if (popup && closePopup) {
    // Open popup 0.6s after page load
    window.addEventListener("load", () => {
      setTimeout(() => popup.classList.add("active"), 600);
    });

    closePopup.addEventListener("click", () => {
      popup.classList.remove("active");
    });
  }

  /* ------------------- HAMBURGER NAV ------------------- */
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (hamburger && navLinks) {
    // Toggle menu
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  /* ------------------- SCROLL ANIMATION OBSERVER ------------------- */
  // This watches for elements entering the screen
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add 'visible' class when element enters viewport
          entry.target.classList.add("visible");
          // Optional: Stop watching once visible (for better performance)
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 } // Trigger when 15% of the item is visible
  );

  // Target all animated elements
  document.querySelectorAll(".card, .portfolio-card, .why-card").forEach((el) => {
    observer.observe(el);
  });
});