const cargarAPIBtn = document.querySelector('#cargarAPI');

cargarAPIBtn.addEventListener('click', obtenerDatosAPI);

function obtenerDatosAPI(){
    //const url = 'https://picsum.photos/list';
    const url = 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole';


    fetch(url).then(respuesta => respuesta.json()
    ).then(resultado => mostrarDatosJSON(resultado));
};

function mostrarDatosJSON(datos){
    const contenido = document.querySelector('.contenido');

    let html = '';

    datos.forEach(perfil => {
        const {first, last, email} = perfil;

        html += `
            <br>
            <p>Nombre: ${first}</p>
            <p>Apellido: ${last}</p>
            <p>Email: ${email}</p>
        `;
    });

    contenido.innerHTML = html;
    
}