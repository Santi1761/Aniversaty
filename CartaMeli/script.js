const envelope = document.querySelector('.envelope-wrapper');
const letter = document.querySelector('.letter');
const heartContainer = document.querySelector('.heart-background');

// Función para generar corazones flotantes
function createFloatingHearts() {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.classList.add("heart-animation");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 500);
}

// Iniciar corazones flotantes
createFloatingHearts();

// Animación de la carta
document.addEventListener('click', (e) => {
    if (
        e.target.matches(".envelope") ||
        e.target.matches(".tap-right") ||
        e.target.matches(".tap-left") ||
        e.target.matches(".heart")
    ) {
        envelope.classList.toggle('flap');

        if (!letter.classList.contains('opened')) {
            setTimeout(() => {
                letter.classList.add('letter-opening');

                setTimeout(() => {
                    letter.classList.remove('letter-opening');
                    letter.classList.add('opened');
                }, 500);
            }, 1000);
        }
    } else if (e.target.matches(".envelope *")) {
        envelope.classList.remove('flap');
        if (letter.classList.contains("opened")) {
            letter.classList.add("closing-letter");
            setTimeout(() => {
                letter.classList.remove("closing-letter");
                letter.classList.remove("opened");
            }, 500);
        }
    }
});
