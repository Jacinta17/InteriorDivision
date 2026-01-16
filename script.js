/* =========================
   MAIN CONTACT FORM
========================= */

const mainForm = document.getElementById("contactForm");
const mainStatus = document.getElementById("formStatus");

if (mainForm) {
  mainForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = mainForm.querySelectorAll("input, textarea");
    let valid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.style.borderColor = "red";
        valid = false;
      } else {
        input.style.borderColor = "#ccc";
      }
    });

    if (!valid) {
      mainStatus.textContent = "Please fill in all required fields.";
      mainStatus.style.color = "red";
      return;
    }

    const button = mainForm.querySelector("button");
    button.textContent = "Submitting...";
    button.disabled = true;

    setTimeout(() => {
      mainStatus.textContent = "Thank you! Our team will contact you shortly.";
      mainStatus.style.color = "green";

      mainForm.reset();
      button.textContent = "Submit";
      button.disabled = false;
    }, 1500);
  });
}

/* =========================
   CONSULTATION POPUP (FIXED)
========================= */

const popup = document.getElementById("consultPopup");
const closePopupBtn = document.getElementById("closePopup");
const popupForm = document.getElementById("popupForm");
const popupStatus = document.getElementById("popupStatus");

// Show popup on page load (after short delay)
window.addEventListener("load", () => {
  if (popup) {
    setTimeout(() => {
      popup.classList.add("active");
    }, 600);
  }
});

// Close popup (X button)
if (closePopupBtn) {
  closePopupBtn.addEventListener("click", () => {
    popup.classList.remove("active");
  });
}

// Close popup when clicking outside popup box
if (popup) {
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove("active");
    }
  });
}

// Handle popup form submission
if (popupForm) {
  popupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = popupForm.querySelectorAll("input, textarea");
    let valid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.style.borderColor = "red";
        valid = false;
      } else {
        input.style.borderColor = "#ccc";
      }
    });

    if (!valid) {
      popupStatus.textContent = "Please fill in all fields.";
      popupStatus.style.color = "red";
      return;
    }

    const button = popupForm.querySelector("button");
    button.textContent = "Submitting...";
    button.disabled = true;

    setTimeout(() => {
      popupStatus.textContent = "Thank you! We’ll contact you shortly.";
      popupStatus.style.color = "green";

      popupForm.reset();
      button.textContent = "Request Callback";
      button.disabled = false;

      setTimeout(() => {
        popup.classList.remove("active");
      }, 1200);
    }, 1500);
  });
}
