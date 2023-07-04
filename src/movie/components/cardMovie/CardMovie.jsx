
export const CardMovie = ({ movie }) => {

    const { original_title, backdrop_path, overview } = movie

    return (
        <div className="rounded-md bg-slate-200 shadow-lg p-4 h-96 overflow-hidden">
            <h2 className='text-lg'>{original_title}</h2>
            <img
                src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                alt={original_title}
                className="rounded-md shadow-md my-2" />
            <p>{overview}</p>
        </div>
    )
}
