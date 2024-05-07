import { getCharacters } from "./peticiones/getCharacters"

/* Variables idk */
let loadedCharacters = [];

export const loadInitialCharacters = async() => {
    const characters = await getCharacters();
    createCharactersCards(characters);
}

const createCharactersCards = async(characters) => {
    const charactersRow = document.getElementById('charactersRow');

    characters.map((character) => {
        const {id, name, race, ki, description, image, maxki, gender} = character;

        if (!loadedCharacters.includes(id)){
            loadedCharacters.push(id);

            const divRow = document.createElement('div');
            divRow.classList.add("col-xl-3");
            divRow.classList.add("col-sm-12");

            const card = document.createElement('div');
            card.classList.add('card');
            card.classList.add('mt-2');
            card.classList.add('mb-2');

            const imgCard = document.createElement('img');
            imgCard.classList.add('car-img-top');
            imgCard.classList.add('mt-2');
            imgCard.classList.add('mx-auto');
            imgCard.classList.add('w-75');
            imgCard.src = image;

            const divBody = document.createElement('div');
            divBody.classList.add('card-body');
            divBody.classList.add('text-center');
            divBody.classList.add('mx-auto');

            const tituloCard = document.createElement('h5');
            tituloCard.classList.add('card-title');
            tituloCard.textContent = name;

            const levelCard = document.createElement('p');
            levelCard.classList.add('card-text');
            levelCard.textContent = textContent;

            const btnVer = document.createElement('button');
            btnVer.classList.add('btn');
            btnVer.classList.add('btn-primary');
            btnVer.classList.add('text-center');
            btnVer.classList.add('mx-auto');

            btnVer.textContent = 'Ver detalles';
            //btnVer.addEventListener("click", () => enviarData(id, name, race, ki, description, image, maxki, gender))
            btnVer.addEventListener("click", () => {

            });
        }
    })
}