    const searchInput = document.getElementById('search-input');
    const articles = document.querySelectorAll('.article');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        
        articles.forEach(article => {
            const keywords = article.getAttribute('data-keywords').toLowerCase();
            
            if (keywords.includes(query)) {
                article.style.display = ''; // Affiche l'article
            } else {
                article.style.display = 'none'; // Cache l'article
            }
        });
    });


    const image = document.getElementById('AnimatedImage');

    let scale = 1;
    let growing = true;
    
    function animateZoom() {
        if (growing) {
            scale += 0.01;
            if (scale >= 1.5) growing = false; // Limite du zoom
        } else {
            scale -= 0.01;
            if (scale <= 1) growing = true; // Limite du dézoom
        }
        image.style.transform = `scale(${scale})`;
        requestAnimationFrame(animateZoom);
    }
    
    animateZoom();
    
particlesJS("particles-js", {
    particles: {
        number: {
            value: 100, // Nombre de particules
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff" // Couleur des particules
        },
        shape: {
            type: "circle", // Forme des particules
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out"
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            }
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});



// Combinaison de touches secrète pour déclencher l'easter egg
const secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];
let userInput = [];

// Écoute les touches du clavier
window.addEventListener('keydown', (e) => {
    userInput.push(e.key);

    // Garde seulement les derniers inputs pour matcher la longueur du code
    userInput = userInput.slice(-secretCode.length);

    // Vérifie si l'utilisateur a entré le code
    if (JSON.stringify(userInput) === JSON.stringify(secretCode)) {
        // Redirige vers une nouvelle page
        window.open("easter_egg.html", "_blank");
    }
});

