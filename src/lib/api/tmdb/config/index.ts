export const FEATURED_SHOW = 73375;

export const tmdbConfig = {
    host: process.env.NEXT_PUBLIC_THE_MOVIE_DB_V3_BASE_URL,
    apiKey: process.env.NEXT_PUBLIC_THE_MOVIE_DB_V3_API_KEY,
    imageHost: "https://image.tmdb.org/t/p",
};

export const getTmdbHost = () => {
    const host = tmdbConfig.host;

    if (!host) {
        throw new Error("NEXT_PUBLIC_THE_MOVIE_DB_V3_BASE_URL is undefined");
    }

    return tmdbConfig.host;
};

export const getTmdbApiKey = () => {
    const host = tmdbConfig.host;

    if (!host) {
        throw new Error("NEXT_PUBLIC_THE_MOVIE_DB_V3_API_KEY is undefined");
    }

    return tmdbConfig.apiKey;
};

export const db = async <T>(endpoint: string, params = ""): Promise<T> => {
    // return fetch(`${getTmdbHost()}${endpoint}?api_key=${getTmdbApiKey()}${params}`).then(res =>
    //     res.json()
    // );
    return fetch(`${getTmdbHost()}${endpoint}&${params}`, {
        method: 'get', 
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YmY3MDkzYjA0ODNmZjFkOTcyMmIzM2E3NDRjNDZmMCIsInN1YiI6IjY2MGEyZDk5MWZkMzZmMDE3Yzk5OGZmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ufTXV6xRE0df3r2wRolLz7HgpWZDurEA5FQoiQ4rfs8'
        }
    }).then(resp => resp.json())
};
