document.getElementById('cambiarEstado').addEventListener('click', function() {
    var estadoP = document.getElementById('estado');
    if (estadoP.textContent === 'Habilitado') {
        estadoP.textContent = 'Deshabilitado';
        estadoP.style.color = 'red'; // Opcional: Cambiar color a rojo cuando esté deshabilitado.
    } else {
        estadoP.textContent = 'Habilitado';
        estadoP.style.color = 'green'; // Opcional: Cambiar color a verde cuando esté habilitado.
    }
});
