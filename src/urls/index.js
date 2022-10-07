import { API_KEY } from '../constants'


export const trending = `https://api.themoviedb.org/3/trending/all/week?api_key=
${API_KEY}&language=en-US`;

export const action = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate`;

export const tv = `https://api.themoviedb.org/3/tv/{tv_id}?api_key=${API_KEY}&language=en-US`;
