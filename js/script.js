/* ========================= typing animation==========================*/

var typed = new Typed(".typing", {
  strings: ["Web Developer", "Programmer", "Web Developer"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});
// Get all sidebar links
const navLinks = document.querySelectorAll(".nav li a");

// Function to remove active class from all links
function removeActiveClass() {
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });
}

// Add click event listener to each link
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    removeActiveClass(); // Remove active class from all links
    this.classList.add("active"); // Add active class to the clicked link
  });
});
