export const getCharacters = async(page=1, limit=8) => {

    try{
        const response = await fetch(`https://dragonball-api.com/api/characters?page=${page}&limit=${limit}`);
        const data = await response.json();
        return data.items;

    }catch(error){
        console.log('El error es: ', error);
    }

}