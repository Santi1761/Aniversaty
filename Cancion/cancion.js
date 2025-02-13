document.addEventListener("DOMContentLoaded", () => {
    console.log("Nuestra Canción ❤️ cargada con éxito.");

    const iframe = document.getElementById("song-video");
    const ytButton = document.getElementById("open-yt");

    iframe.onerror = function () {
        ytButton.style.display = "block";
    };

    // Frases románticas aleatorias
    const frases = [
        "Eres la melodía que da sentido a mi vida. 🎶❤️",
        "Cada nota de esta canción me recuerda a ti. 💞",
        "Nuestro amor es eterno, como esta canción. 💕",
        "Cuando escucho esta canción, siento que estamos abrazados. 🤗",
        "Mi corazón late al ritmo de esta canción... y de tu amor. 💓"
    ];

    const fraseElement = document.getElementById("romantic-phrase");

    function cambiarFrase() {
        const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
        fraseElement.style.opacity = 0;
        setTimeout(() => {
            fraseElement.innerText = fraseAleatoria;
            fraseElement.style.opacity = 1;
        }, 1000);
    }

    setInterval(cambiarFrase, 5000);

    // Corazones flotantes
    const heartsContainer = document.querySelector(".floating-hearts");
    const emojis = ['❤️', '💖', '💞', '💘', '💕'];

    function createHeart() {
        const heart = document.createElement("span");
        heart.className = "heart";
        heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = 5 + Math.random() * 5 + "s";
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000);
    }

    setInterval(createHeart, 1000);

    function abrirYouTube() {
        window.open("https://www.youtube.com/watch?v=dH7_By3Y2i0", "_blank");
    }
});
