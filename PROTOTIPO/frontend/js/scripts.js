let currentQuestion = 0;
let lives = 3;
let position = 0;
let energia = 100; // Energía inicial (100%)
const questions = [
    { question: "¿Cuál es la capital de Francia?", options: ["Madrid", "París", "Berlín"], correct: 1 },
    { question: "¿Cuál es la fórmula del agua?", options: ["CO2", "NaCl", "H2O"], correct: 2 },
    { question: "¿Cuántos planetas hay en el sistema solar?", options: ["8", "9", "10"], correct: 0 },
    { question: "¿Qué gas respiramos principalmente?", options: ["Oxígeno", "Hidrógeno", "Dióxido de carbono"], correct: 0 },
    { question: "¿Cuál es el metal más ligero?", options: ["Litio", "Mercurio", "Oro"], correct: 0 }
];

function startGame() {
    const audio = document.getElementById('backgroundMusic');
    audio.play().catch(error => {
        console.log("El navegador bloqueó la reproducción automática de audio.");
    });

    document.getElementById('startButton').style.display = 'none';
    document.getElementById('questionContainer').style.display = 'block';
    document.getElementById('boy').style.display = 'block';
    document.getElementById('cat').style.display = 'block';
    document.getElementById('stones').style.display = 'flex';
    document.getElementById('lives').style.display = 'block';
    document.getElementById('progress').style.display = 'block';
    document.getElementById('medidor-energia-container').style.display = 'block';
    document.getElementById('medidor-energia').style.display = 'block';

    loadQuestion();
    actualizarMedidorEnergia();
}

function loadQuestion() {
    if (currentQuestion < questions.length) {
        const q = questions[currentQuestion];
        document.getElementById('question').innerText = q.question;
        const options = document.querySelectorAll('.option');
        options.forEach((option, i) => {
            option.innerText = q.options[i];
            option.onclick = () => checkAnswer(i);
        });
        document.getElementById('jumpButton').style.display = 'none';
        document.getElementById('progress').innerText = `Pregunta ${currentQuestion + 1} de ${questions.length}`;
    } else {
        alert("¡Felicidades, cruzaste el río y te reencontraste con el gato!");
        showVictoryAnimation();
    }
}

function checkAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestion].correct;
    if (selectedIndex === correctIndex) {
        energia = Math.min(100, energia + 10); // Rellenar energía
        document.getElementById('medidor-energia').style.width = energia + '%';
        document.getElementById('jumpButton').style.display = 'block'; // Muestra el botón al responder correctamente
    } else {
        lives--;
        energia -= 20; // Reducir energía al responder incorrectamente
        energia = Math.max(0, energia); // Asegurarse de que la energía no sea negativa
        document.getElementById('medidor-energia').style.width = energia + '%';
        updateLives();
        if (lives <= 0) {
            showRetryModal();
        } else {
            alert("Respuesta incorrecta. Vuelve a intentarlo.");
        }
    }
}

function jump() {
    position++;
    const stones = document.querySelectorAll('.stone');

    if (position <= stones.length) {
        const targetStone = stones[position - 1];
        const stoneLeft = targetStone.offsetLeft;
        const stoneTop = targetStone.offsetTop;

        // Obtén las posiciones actuales del niño como números
        const boy = document.getElementById('boy');
        const startX = boy.offsetLeft;
        const startY = boy.offsetTop;

        // Ajusta el final del salto para aterrizar en el centro de la piedra
        const endX = stoneLeft + (targetStone.offsetWidth / 2) - (boy.offsetWidth / 2);
        const endY = stoneTop - (boy.offsetHeight / 2);

        // Imprime las coordenadas para depuración
        console.log(`startX: ${startX}, startY: ${startY}`);
        console.log(`endX: ${endX}, endY: ${endY}`);

        // Llama a la función para animar el salto
        animateJump(startX, startY, endX, endY, 500);

        // Oculta el botón de salto y carga la siguiente pregunta después del salto
        setTimeout(() => {
            document.getElementById('jumpButton').style.display = 'none';
            currentQuestion++;
            loadQuestion();
        }, 600);
    }

    // Verifica si el niño ha llegado al final del juego
    if (position === stones.length) {
        setTimeout(() => {
            alert("¡Felicidades, cruzaste el río y te reencontraste con el gato!");
            showVictoryAnimation();
        }, 500);
    }
}


function animateJump(startX, startY, endX, endY, duration) {
    const element = document.getElementById('boy');
    const frameRate = 60; // Fotogramas por segundo
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let currentFrame = 0;

    const peakHeight = startY - 100; // Altura máxima del salto

    const interval = setInterval(() => {
        currentFrame++;
        const progress = currentFrame / totalFrames;
        const x = startX + (endX - startX) * progress;

        // Curva parabólica para el salto
        const y = startY - (4 * (peakHeight - startY) * progress * (1 - progress));

        element.style.left = `${x}px`;
        element.style.top = `${y}px`;

        if (currentFrame >= totalFrames) {
            clearInterval(interval);
        }
    }, 1000 / frameRate);
}




function updateLives() {
    const livesContainer = document.getElementById('lives');
    livesContainer.innerHTML = '';
    for (let i = 0; i < lives; i++) {
        livesContainer.innerHTML += '❤️';
    }
    if (lives > 0 && lives < 3) {
        livesContainer.classList.add('lives-animation');
        setTimeout(() => livesContainer.classList.remove('lives-animation'), 1000);
    }
}

function showRetryModal() {
    document.getElementById('retryModal').style.display = 'flex';
}

function showVictoryAnimation() {
    document.getElementById('boy').style.left = '660px';
    document.getElementById('boy').style.bottom = '80px';
    setTimeout(() => {
        alert("¡Felicidades! ¡Has ganado el juego!");
        resetGame();
    }, 1000);
}

function resetGame() {
    document.getElementById('retryModal').style.display = 'none';
    currentQuestion = 0;
    lives = 3;
    position = 0;
    energia = 100;
    document.getElementById('boy').style.left = '40px';
    document.getElementById('boy').style.bottom = '60px';
    updateLives();
    actualizarMedidorEnergia();
    loadQuestion();
}

function actualizarMedidorEnergia() {
    document.getElementById('medidor-energia').style.width = energia + '%';
}
