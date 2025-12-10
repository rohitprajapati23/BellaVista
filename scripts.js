// ======================= SAFE SCROLL BUTTONS ==========================
function safeScroll(id, section) {
    const btn = document.getElementById(id);
    if (btn) {
        btn.addEventListener("click", function () {
            const target = document.querySelector(section);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
}

safeScroll("btnss", "#restaurant");
safeScroll("abouts", "#about");
safeScroll("contacts", "#contact");
safeScroll("homes", "#home");
safeScroll("rooms", "#room");


// ======================= RESERVATION POPUP ==========================

function openReservation() {
    const box = document.getElementById("overflow");
    if (box) box.style.display = "flex";
}

function closeReservation() {
    const box = document.getElementById("overflow");
    if (box) box.style.display = "none";
}

// (Keeping the functions even if HTML uses plural by mistake)
function openReservations() { openReservation(); }
function closeReservations() { closeReservation(); }


// ======================= REVEAL ANIMATION ============================

const revealss = document.querySelectorAll('.reveals');

if (revealss.length > 0) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, { threshold: 0.2 });

    revealss.forEach(el => observer.observe(el));
}


// ======================= TESTIMONIAL SLIDER ==========================

let current = 0;
const testimonials = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".dot");

function showTestimonial(i) {
    if (testimonials.length === 0) return;

    testimonials.forEach(t => t.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active-dot"));

    testimonials[i].classList.add("active");
    dots[i].classList.add("active-dot");

    current = i;
}

function nextTestimonial() {
    if (testimonials.length === 0) return;
    current = (current + 1) % testimonials.length;
    showTestimonial(current);
}

function prevTestimonial() {
    if (testimonials.length === 0) return;
    current = (current - 1 + testimonials.length) % testimonials.length;
    showTestimonial(current);
}

function goToTestimonial(i) {
    showTestimonial(i);
}


// ======================= ROOMS SLIDER ================================

const container = document.querySelector(".rooms-container");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

// Main arrows to slide container
if (rightBtn && container) {
    rightBtn.addEventListener("click", () => {
        container.scrollLeft += 500;
    });
}

if (leftBtn && container) {
    leftBtn.addEventListener("click", () => {
        container.scrollLeft -= 500;
    });
}

// Internal arrows for images
document.querySelectorAll(".inner-left").forEach(btn => {
    btn.onclick = () => alert("Left image arrow clicked!");
});
document.querySelectorAll(".inner-right").forEach(btn => {
    btn.onclick = () => alert("Right image arrow clicked!");
});






const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const links = document.querySelectorAll("#navLinks li a");

// open/close toggle
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// close menu on link click
links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});

