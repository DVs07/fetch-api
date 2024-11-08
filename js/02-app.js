const cargarJSONBtn = document.querySelector('#cargarJSON');

cargarJSONBtn.addEventListener('click', obtenerDatosJSON);

function obtenerDatosJSON() {
    const url = 'data/empleado.json';

    fetch(url).then(respuesta => {
        console.log(respuesta);
        return respuesta.json();
    }).then(datosJSON => {
        mostrarDatosJSON(datosJSON);
    });

    function mostrarDatosJSON({ id, nombre, empresa, trabajo }) {
        const contendido = document.querySelector('.contenido');
        contendido.innerHTML = `
            <p>ID: ${id}</p>
            <p>Nombre: ${nombre}</p>
            <p>Empresa: ${empresa}</p>
            <p>Trabajo: ${trabajo}</p>
        `;

        setTimeout(() => {
            window.location.href = 'index.html';
        }, 3000);
    }
}