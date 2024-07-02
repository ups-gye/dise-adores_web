document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('data-form');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita el envío por defecto del formulario

      // Recolecta los datos del formulario
      const nombre = document.getElementById('nombre').value;
      const apellidos = document.getElementById('apellido').value;
      const curso = document.getElementById('curso').value;
      const paralelo = document.getElementById('paralelo').value;

      // Muestra el modal de Bootstrap
      $('#success-modal').modal('show');
  });
});
