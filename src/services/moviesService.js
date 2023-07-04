

export const getMovies = async (page=1) => {
    try {
        const resp = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=344fc7cfcfb692e19d65011f998c28d6&language=es-MX&page=${page}`)
        const data = await resp.json();
        return data.results
    } catch (error) {
        console.log(error)
    }
}