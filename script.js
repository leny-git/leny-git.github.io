document.addEventListener('DOMContentLoaded', function() {
    initializeTerminalEffect();
    initializeSmoothScroll();
    initializeSkillCards();
    initializeProjectCards();
});

function initializeTerminalEffect() {
    const terminal = document.querySelector('.terminal-body');
    if (!terminal) return;

    const lines = terminal.querySelectorAll('.line');
    lines.forEach((line, index) => {
        line.style.animation = `fadeIn 0.5s ease-in-out ${index * 0.1}s both`;
    });
}

function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function initializeSkillCards() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            this.style.setProperty('--mouse-x', x + 'px');
            this.style.setProperty('--mouse-y', y + 'px');
        });

        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 25px rgba(0, 255, 0, 0.4), inset 0 0 15px rgba(0, 255, 255, 0.1)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
}

function initializeProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 0 25px rgba(0, 255, 0, 0.4), inset 0 0 15px rgba(0, 255, 255, 0.1)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
}

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 0 10px rgba(0, 255, 0, 0.2)';
    } else {
        header.style.boxShadow = 'none';
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const mobileMenu = document.querySelector('.nav');
        if (mobileMenu) {
            mobileMenu.style.display = 'none';
        }
    }
});

const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
    }

    .section-title {
        animation: slideInLeft 0.8s ease-out;
    }

    .about-box, .skill-card, .project-card {
        animation: fadeIn 0.6s ease-out forwards;
    }

    .contact-link:hover {
        animation: pulse 0.5s ease-in-out;
    }
`;
document.head.appendChild(style);

console.log('%c$ Hoş geldiniz LENY_GIT portföyüne!', 'color: #00ff00; font-size: 16px; font-weight: bold;');
console.log('%c> Security Developer | Ethical Hacker | Open Source Contributor', 'color: #00ffff; font-size: 12px;');
console.log('%c> GitHub: https://github.com/leny-git', 'color: #00ff00; font-size: 11px;');