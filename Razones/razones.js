const razones = [
    "Porque iluminas mis días con tu sonrisa 😊",
    "Porque me inspiras a ser mejor cada día 💖",
    "Porque tu risa es mi sonido favorito 😂",
    "Porque a tu lado todo es más bonito ✨",
    "Porque tienes el corazón más hermoso del mundo ❤️",
    "Porque me apoyas en mis sueños y locuras 🚀",
    "Porque nuestras conversaciones nunca son aburridas 🗨️",
    "Porque en tus abrazos encuentro paz 🤗",
    "Porque juntos creamos recuerdos inolvidables 📸",
    "Porque simplemente, TE AMO 😍",
    "Porque eres mi persona favorita en el mundo 🌎",
    "Porque amo la forma en que me miras 😍",
    "Porque cada día a tu lado es un regalo 🎁",
    "Porque me haces reír hasta en los peores momentos 😂",
    "Porque mi corazón late más fuerte cuando estoy contigo 💓",
    "Porque cada beso tuyo es magia ✨💋",
    "Porque eres el amor de mi vida ❤️",
    "Porque no hay nadie como tú 🌟",
    "Porque juntos somos un equipo increíble 💑",
    "Porque haría cualquier cosa por verte feliz 😊"
];

const container = document.querySelector('.reasons-container');
const showButton = document.getElementById('showReason');
const sound = document.getElementById('sound');

let index = 0;

showButton.addEventListener('click', () => {
    if (index < razones.length) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `<p>${razones[index]}</p>`;
        container.appendChild(card);
        sound.play();  // Reproducir sonido
        index++;
    } else {
        showButton.innerText = "Ya te dije todas las razones... ¡Pero hay infinitas más! 💕";
        showButton.disabled = true;
        showButton.style.opacity = 0.7;
    }
});
