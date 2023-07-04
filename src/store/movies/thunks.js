import { getMovies } from "../../services/moviesService";
import { setMovies } from "./moviesSlice";

export const startLoadingMovies = () => {
    return async (dispatch) => {
        const movies = await getMovies();
        console.log(movies)
        dispatch(setMovies(movies))
    }
}