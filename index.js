const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeBtn");

// Open menu
hamburgerBtn.addEventListener("click", () => {
    mobileMenu.style.right = "0";
});

// Close menu
closeBtn.addEventListener("click", () => {
    mobileMenu.style.right = "-100%";
});
