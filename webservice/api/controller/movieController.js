import * as tmdb from '../external/tmdb.js';
export const getters = {
    async searchMovies(req, res) {
        try {
            let search = req.query.search;
            console.log(search)
            if (!search || search.length === 0) {
                res.status(204).json()
            } else {
                let movies = await tmdb.getters.getMovies(search);
                res.status(200).json(movies);
            }
        } catch (err) {
            console.log('error', err);
            res.status(500).json(err);
        }
    }
}