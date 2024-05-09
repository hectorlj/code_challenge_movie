import got from 'got';
import 'dotenv/config';
const tmdb_url = process.env.TMDB_V3_URL;
const tmdb_key = process.env.TMDB_KEY;
const locale = process.env.TMDB_LOCALE;
const region = process.env.TMDB_REGION;
const include_adult = process.env.TMDB_INCLUDE_ADULT;
const image_url = process.env.TMDB_IMAGE_URL;
export const getters = {
    async getMovies (query_term) {
        let movies = [];
        let url = `${tmdb_url}/search/movie?api_key=${tmdb_key}&language=${locale}&query=${encodeURIComponent(query_term)}&page=1&include_adult=${include_adult}&region=${region}`;
        return got.get(url, {responseType: 'json'})
            .then(res => {
                console.log('Status Code: ', res.statusCode);
                let results = res.body.results;
                if (results.length > 10) {
                    results = results.slice(0, 10);
                }
                results.forEach(element => {
                    // Create FQDN url.
                    let movie = {
                        'title': element.title,
                        'movie_id': element.id,
                        'popularity_summary': `${element.popularity} out of ${element.vote_count}`,
                        'summary': element.overview
                    };
                    // Check that poster path exists before creating url.
                    // Might be overkill.
                    if (element.poster_path) {
                        movie.poster_image_url = `${image_url}${element.poster_path}`;
                    }
                    movies.push(movie);
                });
                return movies;
            })
            .catch(err => {
                console.log("There was an error: ", err.message, url);
                return {"error_message": err.message};
            })
    }
}