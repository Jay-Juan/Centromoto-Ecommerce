const motos = ""
const marcas = ""

function traerInfo(info) {
    fetch(info)
        .then((respuesta) => respuesta.json())
        .then((datos) => {
            funcion(datos);
        });
}
