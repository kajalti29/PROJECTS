// MENU
const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// SCROLL
document.getElementById("exploreBtn").addEventListener("click", () => {
    document.getElementById("destination").scrollIntoView({ behavior: "smooth" });
});

// ALERT
document.getElementById("bookBtn").addEventListener("click", () => {
    alert("Booking feature coming soon ✈️");
});

// FORM
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Message sent successfully ✅");
});