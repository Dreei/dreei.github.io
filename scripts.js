// scripts.js
// Change active class on nav links
document.addEventListener("DOMContentLoaded", function() {
    var currentUrl = window.location.href;
    var navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function(link) {
        if (link.href === currentUrl) {
            link.classList.add('active');
        } else {
            link.classList.remove('active'); // Remove active class if not on current page
        }
    });
});


// Prevent default action of nav links if already active
document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Check if the link is already active
            if (link.classList.contains('active')) {
                // Prevent the default action of the click event
                event.preventDefault();
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Intro Animation Sequence
    var tl = gsap.timeline();
    var t2 = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
     // Check if it's the first visit to the site
     var isFirstVisit = false;
     var isHomePage = window.location.pathname.endsWith('home.html');

     var header = document.querySelector('.header');
     var logo = document.querySelector('.logo');
     var navLinks = document.querySelectorAll('.nav-link');

    // Create a GSAP timeline for the header and navbar animation
    var tl = gsap.timeline();

    // Define the header and navbar animation
    tl.from(header, { opacity: 0, duration: 1, ease: "power2.out" })
    .from(logo, { opacity: 0, x: -50, duration: 0.5, ease: "power2.out" }, "-=0.5")
    .from(navLinks, { opacity: 0, x: -20, stagger: 0.2, duration: 0.5, ease: "power2.out" }, "-=0.5");



    // Animate the logo
     t2.to(logo, { textContent: "Benz_", duration: 0.5, ease: "power1.inOut" })
     .to(logo, { textContent: "Benz", duration: 0.5, ease: "power1.inOut"});

    
    





    // Animate other elements as needed
    var Name = document.querySelector('.Name');
    // Get the text content of the Name
    var NameText = Name.innerText;
    
    // Clear the Name content
    Name.innerText = '';
    
    // Initialize index variable
    var index = 0;
    
    // Define typing animation function
    function type() {
        // Check if the index is less than the length of the Name text
        if (index < NameText.length) {
            // Append the next character to the Name
            if (NameText[index] === ' ') {
                Name.innerHTML += '&nbsp;';
            } else {
                Name.innerText += NameText[index];
            }
            index++;
            // Call the function recursively with a delay
            setTimeout(type, 100); // Adjust the typing speed as needed
        }
    }
    // Call the typing animation function
    type();



    // Add any additional animations you want to include in the intro sequence
});

// JavaScript code to toggle dropdown menu visibility
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    // Toggle dropdown menu visibility when clicking the menu icon
    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});



const portfolioItems = document.getElementById('portfolioItems');
let isDragging = false;
let startX;
let scrollLeft;

portfolioItems.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - portfolioItems.offsetLeft;
    scrollLeft = portfolioItems.scrollLeft;
});

portfolioItems.addEventListener('mouseleave', () => {
    isDragging = false;
});

portfolioItems.addEventListener('mouseup', () => {
    isDragging = false;
});

portfolioItems.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - portfolioItems.offsetLeft;
    const walk = (x - startX) * 3; // Adjust the multiplier to control the scroll speed
    portfolioItems.scrollLeft = scrollLeft - walk;
});