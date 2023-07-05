import axios from "axios";


export const getMovies = async (page=1) => {
    try {
        const {data} = await axios.get('https://api.themoviedb.org/3/movie/popular',{
            params:{
                api_key:'344fc7cfcfb692e19d65011f998c28d6',
                language:'es-MX',
                page:page
            },
            headers:{}
        })
        return data.results
    } catch (error) {
        console.log(error)
    }
}