/* =========================
   DARK MODE TOGGLE
========================= */

const darkModeBtn = document.getElementById("darkModeBtn");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    darkModeBtn.textContent = "☀️";
}

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        darkModeBtn.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        darkModeBtn.textContent = "🌙";
    }

});

/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* =========================
   ANIMATED COUNTERS
========================= */

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    const statsSection = document.querySelector(".stats");

    if (!statsSection) return;

    const sectionTop = statsSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach((counter) => {

            const target = +counter.getAttribute("data-target");

            let current = 0;

            const increment = target / 120;

            const updateCounter = () => {

                if (current < target) {

                    current += increment;

                    counter.innerText = Math.ceil(current);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target + "+";

                }

            };

            updateCounter();

        });

    }

}

window.addEventListener("scroll", startCounters);
startCounters();

/* =========================
   COPY EMAIL FEATURE
========================= */

const emailLink = document.querySelector(".email-box a");

if (emailLink) {

    emailLink.addEventListener("click", function (e) {

        e.preventDefault();

        const email = this.textContent.trim();

        navigator.clipboard.writeText(email)
            .then(() => {

                const originalText = this.textContent;

                this.textContent = "✓ Email Copied!";

                setTimeout(() => {

                    this.textContent = originalText;

                }, 2000);

            })
            .catch(() => {

                window.location.href = `mailto:${email}`;

            });

    });

}

/* =========================
   CONTACT FORM MESSAGE
========================= */

const contactForm = document.querySelector("form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const button = this.querySelector("button");

        const originalText = button.textContent;

        button.textContent = "Message Sent ✓";

        button.disabled = true;

        setTimeout(() => {

            button.textContent = originalText;

            button.disabled = false;

            this.reset();

        }, 2500);

    });

}

/* =========================
   SMOOTH NAVIGATION ACTIVE
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active-link");
        }

    });

});

/* =========================
   HERO BUTTON INTERACTION
========================= */

const donateBtn = document.querySelector(".donate-btn");

if (donateBtn) {

    donateBtn.addEventListener("click", () => {

        alert(
            "Thank you for supporting She Can Foundation! ❤️"
        );

    });

}

/* =========================
   PAGE LOADED EFFECT
========================= */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});