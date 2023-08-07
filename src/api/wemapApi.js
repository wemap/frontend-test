const apiURL = ' https://api.getwemap.com/v3.0/pinpoints/search';

async function fetchWemapData(query, offset = 0, limit = 10) {
    try {
        const response = await fetch(`${apiURL}?query=${encodeURIComponent(query)}&offset=${offset}&limit=${limit}`);
        console.log('Réponse de l\'API', response);
        if (!response.ok) {
            throw new Error('Réponse de l\'API non valide');
        }
        const data = await response.json();
        console.log('Données récupérées depuis Wemap', data);
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données depuis Wemap', error);
        return null;
    }
}

export default fetchWemapData;