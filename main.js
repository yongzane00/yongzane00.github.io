document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;
    const elements = document.querySelectorAll(".fade-in-up");

    function reveal() {
        elements.forEach((el) => {
            const position = el.getBoundingClientRect().top;
            if (position < window.innerHeight - 200) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", reveal);
    reveal();

    // Check for saved preference in localStorage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-theme");
        toggleButton.textContent = "Light Mode ☀️";
    }

    toggleButton.addEventListener("click", function () {
        if (body.classList.contains("dark-theme")) {
            body.classList.remove("dark-theme");
            localStorage.setItem("theme", "light");
            toggleButton.textContent = "Dark Mode 🌙";
        } else {
            body.classList.add("dark-theme");
            localStorage.setItem("theme", "dark");
            toggleButton.textContent = "Light Mode ☀️";
        }
    });
    
    // Check user's system preference if no saved preference
    if (!localStorage.getItem("theme")) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            body.classList.add("dark-theme");
            toggleButton.textContent = "Light Mode ☀️";
            localStorage.setItem("theme", "dark");
        }
    }
});