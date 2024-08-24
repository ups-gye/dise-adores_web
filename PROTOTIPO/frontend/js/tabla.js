document.addEventListener("DOMContentLoaded", function () {
  // JSON simulado, reemplaza con tu lógica de carga real
  const data = [
    { nombre: "Mark", apellido: "Otto", paralelo: "A", puntaje: "100%" },
    { nombre: "Jacob", apellido: "Thornton", paralelo: "A", puntaje: "99%" },
    { nombre: "Larry", apellido: "Langosta", paralelo: "B", puntaje: "90%" },
  ];

  const tableBody = document.querySelector("#puntuaciones-table tbody");

  // Función para cargar los datos en la tabla
  function renderTable(data) {
    tableBody.innerHTML = ""; // Limpiar tabla antes de agregar datos

    data.forEach((item) => {
      let row = `
                <tr>
                    <td>${item.nombre}</td>
                    <td>${item.apellido}</td>
                    <td>${item.paralelo}</td>
                    <td>${item.puntaje}</td>
                </tr>
            `;
      tableBody.innerHTML += row;
    });
  }

  // Llamada inicial para cargar los datos
  renderTable(data); // Reemplaza 'data' con la lógica real para cargar desde JSON
});
