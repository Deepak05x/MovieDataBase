export const API_KEY = process.env.REACT_APP_API_KEY || "";

export const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`;

export const API_SINGLE_MOVIE_URL = `https://api.themoviedb.org/3/movie/<movie_id>?api_key=${API_KEY}`;
