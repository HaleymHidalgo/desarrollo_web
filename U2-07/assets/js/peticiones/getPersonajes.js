export const getPersonajes = async() => {
    try{
        /* Realiza una petición a la API en segundo plano */
        const response = await fetch("https://rickandmortyapi.com/api/character");
        /* la respuesta de la API la transformamos en un archivo json en 2do plano*/
        const data = await response.json();

        /* Retornamos los datos que necesitamos de la API */
        return data.results;

    }catch(error){ /* En caso de error, se imprime en pantalla la información */
        console.log('Error es: ', error);
    }
}