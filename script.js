// ১. Typing Effect (হিরো সেকশনে নামের বদলে টাইপিং টেক্সট দেখাবে)
const heroTitle = document.querySelector('.hero h1');
if (heroTitle) {
    const roles = ["Web Developer", "UI/UX Designer", "Problem Solver"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            heroTitle.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            heroTitle.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = 2000; // টেক্সট লেখা শেষ হলে ২ সেকেন্ড অপেক্ষা করবে
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500;
        }

        setTimeout(typeEffect, typeSpeed);
    }

    // টাইপিং ইফেক্ট চালু করা
    typeEffect();
}

// ২. Smooth Scrolling for Navigation Links (মেনুতে ক্লিক করলে স্মুথলি স্ক্রল হবে)
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ৩. Active Navigation Link on Scroll (স্ক্রল করার সময় মেনু আইটেম হাইলাইট হওয়া)
window.addEventListener('scroll', () => {
    let currentSection = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    document.querySelectorAll('nav a').forEach(a => {
        a.style.color = '#94a3b8'; // ডিফল্ট কালার
        if (a.getAttribute('href') === `#${currentSection}`) {
            a.style.color = '#38bdf8'; // একটিভ কালার (নীল)
        }
    });
});