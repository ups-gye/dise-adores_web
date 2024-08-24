document.getElementById('startButton').addEventListener('click', function() {
    // Oculta la imagen principal
    document.getElementById('imageContainer').classList.add('hidden');

    // Muestra la nueva imagen
    document.getElementById('newImageContainer').classList.remove('hidden');
});

// Ejemplo básico en JavaScript
let energia = 100; // Energía inicial (100%)

function actualizarMedidorEnergia() {
    document.getElementById("medidor-energia").style.width = energia + "%";
}

function intentarResponder(correcto) {
    if (correcto) {
        energia = Math.min(energia + 20, 100); // Recarga energía hasta un máximo de 100%
    } else {
        energia -= 10; // Reduce energía en caso de error
    }

    actualizarMedidorEnergia();

    if (energia <= 0) {
        alert("¡Te has quedado sin energía! Debes esperar para recargar.");
        // Implementa lógica para cuando la energía se agote
    }
}
