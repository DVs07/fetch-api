const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');

cargarJSONArrayBtn.addEventListener('click', obtenerDatosJSON);

function obtenerDatosJSON() {
    const url = 'data/empleados.json';

    fetch(url).then( respuesta => respuesta.json()
    ).then(datosJSON => mostrarDatosJSON(datosJSON)
    )
};

function mostrarDatosJSON(empleados) {
    const contenido = document.querySelector('.contenido');

    let html = '';

    empleados.forEach(empleado => {
        const { id, nombre, empresa, trabajo } = empleado;

        html += `
            <br>
            <p>ID: ${id}</p>
            <p>Nombre: ${nombre}</p>
            <p>Empresa: ${empresa}</p>
            <p>Trabajo: ${trabajo}</p>
        `;
    });

    contenido.innerHTML = html;

    setTimeout(() => {
        window.location.href = 'index.html';
    }, 3000);
}
