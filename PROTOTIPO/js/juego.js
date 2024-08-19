document.getElementById('startButton').addEventListener('click', function() {
    // Oculta la imagen principal
    document.getElementById('imageContainer').classList.add('hidden');

    // Muestra la nueva imagen
    document.getElementById('newImageContainer').classList.remove('hidden');
});
