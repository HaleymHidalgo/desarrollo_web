import { getPersonajes } from "./peticiones/getPersonajes.js";
import { addCharacters } from "./peticiones/addCharacters.js";

// Al cargar todo el codigo, se ejecuta la funcion
getPersonajes()
    .then( (data) => {
        addCharacters(data);
    })
    .catch( (error) => {
        console.log('Error: ', error);
    })