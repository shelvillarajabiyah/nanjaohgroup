// Journey data for info display
const journeyData = {
    'journey1-btn': {
        title: 'Honai - Traditional Papuan Home',
        description: 'Experience the warmth of a traditional Honai dwelling, where families gather and children begin their day before the long journey to school.',
        file: 'journey1.html'
    },
    'journey2-btn': {
        title: 'Forest Path - Through the Jungle',
        description: 'Navigate through dense tropical forests, listening to exotic birds and experiencing the rich biodiversity of Papua\'s wilderness.',
        file: 'journey2.html'
    },
    'journey3-btn': {
        title: 'River Crossing - Natural Bridges',
        description: 'Cross rushing mountain streams using fallen logs and natural bridges, experiencing the challenges of reaching remote schools.',
        file: 'journey3.html'
    },
    'journey4-btn': {
        title: 'Our School - Learning Together',
        description: 'Arrive at the remote mountain school and join other children in their classroom, experiencing the joy of education despite the challenges.',
        file: 'journey4.html'
    },
    'journey5-btn': {
        title: 'Thank You - Appreciation & Hope',
        description: 'Reflect on the journey and the importance of education accessibility. A heartfelt thank you for experiencing this important story.',
        file: 'journey5.html'
    }
};

// Function to load VR journey
function loadVRJourney(journeyId) {
    const previewIframe = document.getElementById('preview-iframe');
    const journeyInfo = document.getElementById('journey-info');
    
    const journey = journeyData[journeyId];
    
    if (journey) {
        // Load the HTML file in iframe
        previewIframe.src = journey.file;
        
        // Update journey info
        journeyInfo.innerHTML = `
            <h3>${journey.title}</h3>
            <p>${journey.description}</p>
        `;

        // Update active button state
        document.querySelectorAll('.journey-btn').forEach(btn => {
            btn.classList.remove('active-journey');
        });
        document.getElementById(journeyId).classList.add('active-journey');
    }
}

// Initialize with journey1 active
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('journey1-btn').classList.add('active-journey');

    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('active'); // Tambahkan ini untuk mengubah ikon hamburger
        });
    }

    // Add click functionality to journey buttons
    document.querySelectorAll('.journey-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior
            
            // Add ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.marginLeft = '-10px';
            ripple.style.marginTop = '-10px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Load VR journey
            loadVRJourney(this.id);
        });
    });

    // Add CSS animation for ripple effect
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
});