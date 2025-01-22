const API_KEY = "b5d2dc4bfa2aecd11c78204c2c435f16";
const BASE_URL = "https://api.themoviedb.org/3";

//Displaying today's movie 
export const getPupularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results; //data have a method called results which will have the result of the movie from the API
};

//Searching for movie
export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie/?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results; //data have a method called results which will have the result of the movie from the API
};