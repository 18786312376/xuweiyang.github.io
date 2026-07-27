document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 5px 25px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });

    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.classList.add('observe-me');
        observer.observe(card);
    });

    const portfolioCards = document.querySelectorAll('.portfolio-card');
    portfolioCards.forEach(card => {
        card.classList.add('observe-me');
        observer.observe(card);
    });

    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.classList.add('observe-me');
        observer.observe(item);
    });

    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = '发送中...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.textContent = '发送成功！';
                submitBtn.style.background = 'var(--secondary-color)';
                
                contactForm.reset();
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 2000);
            }, 1500);
        });
    }

    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-5px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(-5px) scale(1)';
        });
    });

    const heroText = document.querySelector('.hero-text');
    if (heroText) {
        heroText.addEventListener('mouseenter', () => {
            heroText.style.transform = 'scale(1.02)';
        });
        
        heroText.addEventListener('mouseleave', () => {
            heroText.style.transform = 'scale(1)';
        });
    }

    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.addEventListener('mouseenter', () => {
            heroImage.style.transform = 'scale(1.05)';
        });
        
        heroImage.addEventListener('mouseleave', () => {
            heroImage.style.transform = 'scale(1)';
        });
    }

    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX - window.innerWidth / 2) / 50;
        mouseY = (e.clientY - window.innerHeight / 2) / 50;
        
        if (heroImage) {
            heroImage.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        }
    });

    const floatElements = document.querySelectorAll('.float-element');
    floatElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.5}s`;
    });
});