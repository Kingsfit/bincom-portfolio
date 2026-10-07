// Mobile navigation
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


// Close the mobile menu after clicking a link
const links = navLinks.querySelectorAll("a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});


// Contact button
const contactBtn = document.getElementById("contactBtn");
const contactMessage = document.getElementById("contactMessage");

contactBtn.addEventListener("click", function () {
    contactMessage.textContent =
        "Thanks for reaching out! I would be happy to connect.";
});
