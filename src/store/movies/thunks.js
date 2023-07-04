import { getMovies } from "../../services/moviesService";
import { setMovies } from "./moviesSlice";

export const startLoadingMovies = (page) => {
    return async (dispatch) => {
        const movies = await getMovies(page);
        console.log(movies)
        dispatch(setMovies(movies))
    }
}