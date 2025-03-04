document.getElementById('crearBoton').addEventListener('click', function(){

    const colorFondo = document.getElementById('colorFondo').value;
    const colorFuente = document.getElementById('colorFuente').value;
    const alto = document.getElementById('alto').value + 'px';
    const ancho = document.getElementById('ancho').value + 'px';
    const padd = document.getElementById('padd').value + 'px';
    const estiloTexto = document.getElementById('estiloTexto').value;
    const esquinas = document.getElementById('esquinas').value;
    const unidad = document.getElementById('unidad').value;
    const habilitarEsquinas = document.getElementById('habilitarEsquinas').checked;

    // Eliminar cualquier botón anterior si existe
    const contenedor = document.getElementById('resultado');
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }

    const nvBoton = document.createElement('button');

    nvBoton.textContent = 'Nuevo Botón';
    nvBoton.style.background = colorFondo;
    nvBoton.style.color = colorFuente;
    nvBoton.style.height = alto;
    nvBoton.style.width = ancho;
    nvBoton.style.padding = padd;
    nvBoton.style.fontStyle = estiloTexto;

    // Verifica la unidad y convierte el radio de borde según corresponda
    if (unidad === '%') {
        if (habilitarEsquinas) {
            nvBoton.style.borderRadius = esquinas + '%';
        } else {
            nvBoton.style.borderRadius = '0%';
        }
    } else {
        if (habilitarEsquinas) {
            nvBoton.style.borderRadius = esquinas + 'px';
        } else {
            nvBoton.style.borderRadius = '0px';
        }
    }

    // Agregar el nuevo botón al contenedor
    document.getElementById('resultado').appendChild(nvBoton);

    // Actualizar la referencia al botón actual
    botonActual = nvBoton;
});