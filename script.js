// Loading screen
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
    }, 1000);
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.replace('fa-bars', 'fa-times');
    } else {
        icon.classList.replace('fa-times', 'fa-bars');
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.replace('fa-times', 'fa-bars');
    });
});

// Active nav link highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 150) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Navbar scroll effects
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.12)';
        navbar.style.backdropFilter = 'blur(25px)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.08)';
        navbar.style.backdropFilter = 'blur(20px)';
    }
}

// Discord webhook URL - Replace with your Discord webhook URL
const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1416871258234159267/L3XbLP5qDAkoRU_XyLiae9-SQai_fKPbytKBXl54vgoqtmIrlmZsmlCfQcDSmNHco-yL';

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const discord = formData.get('discord');
    const message = formData.get('message');

    // Simple validation
    if (!name || !discord || !message) {
        alert('Please fill in all fields.');
        return;
    }

    const submitButton = this.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    // Create Discord embed message
    const discordMessage = {
        embeds: [{
            title: "🎮 New Portfolio Contact",
            color: 0x6366f1, // Purple color matching theme
            fields: [
                {
                    name: "👤 Name",
                    value: name,
                    inline: true
                },
                {
                    name: "💬 Discord",
                    value: discord,
                    inline: true
                },
                {
                    name: "📝 Message",
                    value: message,
                    inline: false
                }
            ],
            timestamp: new Date().toISOString(),
            footer: {
                text: "Portfolio Contact Form"
            }
        }]
    };

    // Send to Discord webhook
    fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(discordMessage)
    })
        .then(response => {
            if (response.ok) {
                alert('Thank you for your message! I\'ll get back to you soon on Discord.');
                document.getElementById('contactForm').reset();
            } else {
                throw new Error('Failed to send message');
            }
        })
        .catch(error => {
            alert('Sorry, there was an error sending your message. Please try again or contact me directly on Discord.');
            console.error('Error:', error);
        })
        .finally(() => {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        });
});

// Enhanced hover effects for interactive elements
document.querySelectorAll('.cta-button, .project-button, .submit-button').forEach(button => {
    button.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-3px) scale(1.02)';
    });

    button.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Parallax effect for floating shapes
function handleParallax() {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');

    shapes.forEach((shape, index) => {
        const speed = 0.2 + (index * 0.1);
        const yPos = -(scrolled * speed);
        shape.style.transform = `translateY(${yPos}px)`;
    });
}

// Intersection Observer for better scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    handleScrollAnimations();
    handleNavbarScroll();
    updateActiveNavLink();
});

// Event listeners
window.addEventListener('scroll', () => {
    handleScrollAnimations();
    handleNavbarScroll();
    handleParallax();
    updateActiveNavLink();
});

// Add staggered animation delays to grid items
function addStaggeredAnimations() {
    const projectCards = document.querySelectorAll('.project-card');
    const skillItems = document.querySelectorAll('.skill-item');

    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    skillItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
}

// Enhanced project card interactions
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-15px) scale(1.02)';
        this.style.zIndex = '10';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.zIndex = '1';
    });
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Initialize typing effect and staggered animations after page load
window.addEventListener('load', () => {
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero h1');
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 120);
        addStaggeredAnimations();
    }, 1200);
});

// Smooth reveal animation for sections
const sections = document.querySelectorAll('.section');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
});

// Enhanced scroll reveal
function revealSections() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', revealSections);
revealSections(); // Initial check

// Add click ripple effect to buttons
function createRipple(event) {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const ripple = document.createElement('span');
    ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                background-color: rgba(255, 255, 255, 0.5);
                left: ${x}px;
                top: ${y}px;
                width: ${size}px;
                height: ${size}px;
            `;

    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple effect to all buttons
document.querySelectorAll('.cta-button, .project-button, .submit-button').forEach(button => {
    button.addEventListener('click', createRipple);
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(style);