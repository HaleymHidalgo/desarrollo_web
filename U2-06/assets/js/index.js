import { getCharacters } from "./peticiones/getCharacters.js";

console.log('Script Done');

/* Variables idk */
let isLoading = false;
let loadedCharacters = [];
let currentPage = 1;

const mostrar = async()=> {
    const characters = await getCharacters();
}

getCharacters()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })

window.onload = loadInitialCharacters();

window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeigth } = document.documentElement;

    if (scrollTop + clientHeigth >= scrollHeight - 5 && !isLoading) {
        loadMoreCharacters();
    }
})