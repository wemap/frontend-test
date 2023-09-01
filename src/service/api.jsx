import axios from 'axios';

const apiUrl = 'https://api.getwemap.com/v3.0/pinpoints/search';

export async function getPinpoints(searchText, offset, limit) {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        query: searchText,
        offset: offset,
        limit: limit,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}
