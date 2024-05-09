import { Router } from "express";
import * as movieController from '../api/controller/movieController.js';
const router = Router();

/* GET movies. */
router.get("/movies", movieController.getters.searchMovies);

export default router;