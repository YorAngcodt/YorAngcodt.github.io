// Efek typing
const words = ["Software Developer", "Linux Enthusiast", "Cybersecurity Learner"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typingText");

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
        return;
    }
    
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }
    
    const speed = isDeleting ? 100 : 150;
    setTimeout(typeEffect, speed);
}

// Jalankan efek typing
typeEffect();

// Dark/Light mode toggle
const themeBtn = document.getElementById("themeBtn");
let isDark = true;

themeBtn.addEventListener("click", () => {
    if (isDark) {
        document.body.classList.remove("bg-gray-900");
        document.body.classList.add("bg-gray-100");
        document.body.classList.remove("text-white");
        document.body.classList.add("text-gray-900");
        themeBtn.innerHTML = "☀️";
        themeBtn.classList.remove("bg-gray-700", "hover:bg-gray-600");
        themeBtn.classList.add("bg-gray-300", "hover:bg-gray-400");
        isDark = false;
    } else {
        document.body.classList.remove("bg-gray-100");
        document.body.classList.add("bg-gray-900");
        document.body.classList.remove("text-gray-900");
        document.body.classList.add("text-white");
        themeBtn.innerHTML = "🌙";
        themeBtn.classList.remove("bg-gray-300", "hover:bg-gray-400");
        themeBtn.classList.add("bg-gray-700", "hover:bg-gray-600");
        isDark = true;
    }
});

// Smooth scroll untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});
