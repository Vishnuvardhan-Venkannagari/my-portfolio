
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};

const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

cancelBtn.onclick = hideNavMenu;

let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});

// Email Modal Elements
const hireBtn = document.getElementById("goToContact");
const emailModal = document.getElementById("emailModal");
const closeBtn = document.querySelector(".close-btn");
const contactForm = document.getElementById("contact-form");
const statusMsg = document.getElementById("email-status");

if (hireBtn && emailModal) {
  hireBtn.addEventListener("click", function () {
    emailModal.style.display = "block";
  });
}

if (closeBtn && emailModal) {
  closeBtn.addEventListener("click", function () {
    emailModal.style.display = "none";
  });
}

if (emailModal) {
  window.addEventListener("click", function (e) {
    if (e.target === emailModal) {
      emailModal.style.display = "none";
    }
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm('service_kyw9egg', 'template_rdtso83', this)
      .then(function () {
        if (statusMsg) statusMsg.innerText = "✅ Message sent successfully!";
      }, function (error) {
        if (statusMsg) statusMsg.innerText = "❌ Failed to send message.";
      });

    this.reset();
  });
}


const contactTrigger = document.getElementById("openModalFromContact");

if (contactTrigger && emailModal) {
  contactTrigger.addEventListener("click", function (e) {
    e.preventDefault();
    emailModal.style.display = "block";
  });
}
