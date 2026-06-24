// ======================
// Navbar Scroll Effect
// ======================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(15,23,42,0.98)";

        navbar.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.15)";

    } else {

        navbar.style.background =
            "rgba(15,23,42,0.95)";

        navbar.style.boxShadow = "none";

    }

});


// ======================
// Typed.js Animation
// ======================

var typed = new Typed("#typing-text", {

    strings: [

        "Data Analyst",
        "Power BI Developer",
        "SQL Developer",
        "Python Analyst"

    ],

    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true

});


// ======================
// Dark / Light Mode
// ======================

const themeBtn =
    document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light-mode");

    themeBtn.innerHTML = "☀️";

}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (
        document.body.classList.contains("light-mode")
    ) {

        themeBtn.innerHTML = "☀️";

        localStorage.setItem(
            "theme",
            "light"
        );

    } else {

        themeBtn.innerHTML = "🌙";

        localStorage.setItem(
            "theme",
            "dark"
        );

    }

});


// ======================
// Animated Counters
// ======================

const counters =
    document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
            +counter.getAttribute("data-target");

        const current =
            +counter.innerText;

        const increment =
            target / 100;

        if (current < target) {

            counter.innerText =
                `${Math.ceil(
                    current + increment
                )}`;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});


// ======================
// Scroll Reveal Animation
// ======================

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );

document
    .querySelectorAll(
        ".skill-card, .project-card, .cert-card, .contact-card, .timeline-content"
    )
    .forEach(el => {

        el.classList.add("hidden");

        observer.observe(el);

    });


// ======================
// Active Navbar Links
// ======================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        if (
            pageYOffset >= sectionTop
        ) {

            current =
                section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});


// ======================
// Smooth Scroll
// ======================

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function (e) {

                e.preventDefault();

                document
                    .querySelector(
                        this.getAttribute("href")
                    )
                    .scrollIntoView({

                        behavior: "smooth"

                    });

            }
        );

    });