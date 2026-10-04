
// MOBILE NAVIGATION

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("open");
});

// CLOSE MENU AFTER CLICKING

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {
        navLinks.classList.remove("open");
    });

});

// AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// SCROLL ANIMATION

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

document.querySelectorAll(".reveal").forEach(function(element) {
    observer.observe(element);
});


// 3D PORTRAIT MOUSE MOVEMENT

const imageCard = document.getElementById("imageCard");
const heroImage = document.querySelector(".hero-image");

heroImage.addEventListener("mousemove", function(event) {

    if (window.innerWidth < 850) return;

    const rect = heroImage.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    imageCard.style.transform =
        `rotateY(${-9 + x * 15}deg) rotateX(${3 - y * 10}deg)`;

});


// RESET 3D EFFECT

heroImage.addEventListener("mouseleave", function() {

    imageCard.style.transform =
        "rotateY(-9deg) rotateX(3deg)";

});