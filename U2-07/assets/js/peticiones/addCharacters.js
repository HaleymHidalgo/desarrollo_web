import { pageCharacter } from "./pageCharacter.js";

export const addCharacters = async( results = [] ) => {
    // Obtenemos el contenedor en el que añadiremos los Cards de personajes
    let charactersRow = document.getElementById("charactersRow");

    // Creamos las cards con los datos
    results.map(( result ) => {

        const { id, name, image, species, status, location } = result;
        const { name : nameLocation } = location;

        // Creamos un contenedor para los datos de la tarjeta
        const divCol = document.createElement('div');

        // Se añaden las clases a la etiequeta
        divCol.classList.add("col-xl-3");
        divCol.classList.add("col-lg-3");
        divCol.classList.add("col-md-3");
        divCol.classList.add("col-sm-12");
        divCol.classList.add("col-xs-12");
        divCol.classList.add("mt-2");
        divCol.classList.add("mb-2");

        // Creamos la tarjeta
        const card = document.createElement('div');
        card.classList.add('card');

        // Data de Tarjetas
        const imgCard = document.createElement('img');
        imgCard.classList.add('card-img-top');
        imgCard.src = image;

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = `Nombre: ${name}`;

        const subTitle = document.createElement('p');
        subTitle.classList.add('card-text');
        subTitle.textContent = `Especie: ${species}`;

        const subTitle2 = document.createElement('p');
        subTitle2.classList.add('card-text');
        subTitle2.textContent = `Estado: ${status}`;

        // Button Data
        const btnVer = document.createElement('button');
        btnVer.classList.add('btn', 'btn-success');
        btnVer.textContent = "Ver Detalles";
        btnVer.addEventListener('click', () => pageCharacter( result ));

        // Card Body
        cardBody.appendChild(title);
        cardBody.appendChild(subTitle);
        cardBody.appendChild(subTitle2);
        cardBody.appendChild(btnVer);
        
        // Card
        card.appendChild(imgCard);
        card.appendChild(cardBody);
        
        //divCol
        divCol.appendChild(card);

        //Final
        charactersRow.appendChild(divCol);
    })
}