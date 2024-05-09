const rutaArchivoHTML = "../character.html";

export const pageCharacter = ( result ) => {
    fetch(rutaArchivoHTML)
        .then(response => response.text())
        .then( ( html ) => {

            //Datos para trabajar
            const { id, name, image, species, status, location } = result;
            const { name : nameLocation } = location;

            // Parseamos la data "Bytes" a un String
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html"); // 1-------

            //Alteramos el DOM
            const imagen = doc.getElementById('imgCharacter');
            imagen.src = image;

            const nombre = doc.getElementById('nameCharacter');
            nombre.textContent = `Nombre: ${name}`;

            const especie = doc.getElementById('specieCharacter');
            especie.textContent = `Especie: ${species}`;

            const estado = doc.getElementById('statusCharacter');
            estado.textContent = `Estado: ${status}`;

            const localizacion = doc.getElementById('locationCharacter');
            localizacion.textContent = `Localización: ${nameLocation}`;

            //transforma el html en str
            const nuevoHTML = new XMLSerializer().serializeToString(doc); // 2-------
            //Borra el body y añade el nuevo str(html)
            document.body.innerHTML = nuevoHTML;
        })
        .catch(( error ) => {
            console.log(`El error es: ${error}`);
        })



} 