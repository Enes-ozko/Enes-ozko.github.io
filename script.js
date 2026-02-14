// Language Toggle Functionality
let currentLang = 'fr';

document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('langToggle');
    
    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang) {
        currentLang = savedLang;
        updateLanguage();
    }
    
    // Toggle language on button click
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            currentLang = currentLang === 'fr' ? 'en' : 'fr';
            localStorage.setItem('preferredLang', currentLang);
            updateLanguage();
        });
    }
    
    function updateLanguage() {
        // Update button text
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.textContent = currentLang === 'fr' ? 'EN' : 'FR';
        }
        
        // Update all elements with data-fr and data-en attributes
        const elements = document.querySelectorAll('[data-fr][data-en]');
        elements.forEach(element => {
            const text = currentLang === 'fr' ? element.getAttribute('data-fr') : element.getAttribute('data-en');
            if (text) {
                element.textContent = text;
            }
        });
    }
    
    // Form submission handler
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Create mailto link
            const subject = encodeURIComponent(`Message de ${name}`);
            const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            const mailtoLink = `mailto:enes.ozkosar.75@gmail.com?subject=${subject}&body=${body}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show confirmation
            alert(currentLang === 'fr' ? 
                'Votre client email va s\'ouvrir. Si cela ne fonctionne pas, envoyez un email directement à enes.ozkosar.75@gmail.com' : 
                'Your email client will open. If it doesn\'t work, send an email directly to enes.ozkosar.75@gmail.com'
            );
        });
    }
    
    // Smooth scroll for same-page anchors
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
});

// Add active state to current page in navigation
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});
