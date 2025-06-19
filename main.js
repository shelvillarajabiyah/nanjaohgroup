// main.js

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Hero Section Animation
    const heroContent = document.querySelector('.hero-content');
    
    // Immediately trigger hero content slide in
    if (heroContent) {
        heroContent.style.opacity = 1; // Make it visible for individual element animation
        heroContent.style.transform = 'translateX(0)';
    }

    // Fundraising1 Section Animation
    const fundraising1Section = document.getElementById('fundraising1');
    const fundraising1Elements = [
        document.querySelector('#fundraising1 .section-header h2'),
        document.querySelector('#fundraising1 .section-header p'),
        document.querySelector('#fundraising1 .progress-container'),
        document.querySelector('#fundraising1 .progress-text'),
        document.querySelector('#fundraising1 .cta-donate')
    ];
    const progressBarFill = document.querySelector('.progress');

    // Fundraising Section Animation
    const fundraisingSection = document.querySelector('.fundraising');
    const fundraisingTitle = document.querySelector('.fundraising .section-title');
    const fundraisingSubtitle = document.querySelector('.fundraising .section-subtitle');
    const fundCards = document.querySelectorAll('.fund-card');

    // Project Section Animation
    const projectSection = document.querySelector('.project');
    const projectImg = document.querySelector('.project-img');
    const projectH2 = document.querySelector('.project-content h2');
    const projectP = document.querySelector('.project-content p');
    const projectBtn = document.querySelector('.project-content .cta-btn.white');

    // Intersection Observer for Fundraising1 Section
    const fundraising1Observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate elements sequentially
                fundraising1Elements.forEach((el, index) => {
                    setTimeout(() => {
                        if (el) { // Check if element exists before manipulating
                            el.style.opacity = 1;
                            el.style.transform = 'translateY(0)';
                        }
                    }, index * 300); // Delay each element by 300ms
                });

                // Start progress bar animation after all elements appear, with a small additional delay
                if (progressBarFill) {
                    setTimeout(() => {
                        progressBarFill.classList.add('animate');
                    }, fundraising1Elements.length * 300 + 200); // Total delay of previous animations + 200ms
                }
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, { threshold: 0.3 }); // Trigger when 30% of the section is visible

    if (fundraising1Section) {
        fundraising1Observer.observe(fundraising1Section);
    }

    // Intersection Observer for Fundraising Section
    const fundraisingObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate title and subtitle
                if (fundraisingTitle) {
                    setTimeout(() => {
                        fundraisingTitle.style.opacity = 1;
                        fundraisingTitle.style.transform = 'translateY(0)';
                    }, 0);
                }
                if (fundraisingSubtitle) {
                    setTimeout(() => {
                        fundraisingSubtitle.style.opacity = 1;
                        fundraisingSubtitle.style.transform = 'translateY(0)';
                    }, 300);
                }

                // Animate fund cards sequentially
                fundCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = 1;
                        card.style.transform = 'translateY(0)';
                    }, 600 + index * 200); // Start after title/subtitle, then stagger
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    if (fundraisingSection) {
        fundraisingObserver.observe(fundraisingSection);
    }

    // Intersection Observer for Project Section
    const projectObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate image from left
                if (projectImg) {
                    projectImg.style.opacity = 1;
                    projectImg.style.transform = 'translateX(0)';
                }

                // Animate content from right sequentially
                if (projectH2) {
                    setTimeout(() => {
                        projectH2.style.opacity = 1;
                        projectH2.style.transform = 'translateX(0)';
                    }, 300);
                }
                if (projectP) {
                    setTimeout(() => {
                        projectP.style.opacity = 1;
                        projectP.style.transform = 'translateX(0)';
                    }, 600);
                }
                if (projectBtn) {
                    setTimeout(() => {
                        projectBtn.style.opacity = 1;
                        projectBtn.style.transform = 'translateX(0)';
                    }, 900);
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    if (projectSection) {
        projectObserver.observe(projectSection);
    }
});