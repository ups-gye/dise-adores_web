function submitData() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const course = document.getElementById('course').value;
    const parallel = document.getElementById('parallel').value;
    alert(`Datos ingresados:\nNombre: ${name}\nApellido: ${surname}\nCurso: ${course}\nParalelo: ${parallel}`);
  }
  