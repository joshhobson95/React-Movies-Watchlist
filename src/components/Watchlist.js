import MovieCard from "./MovieCard";

function Watchlist(props){




const movieDisplay = props.watchList.map((movie, index) => {

    return (
    <MovieCard movie={movie} watchList={props.watchList} removeMovie={props.removeMovie}/>    
    )
    });


return(
    <div className="watchlist">
            <h1>My Watchlist</h1>
            <div className="movie-container">
                {movieDisplay}
            </div>
    </div>
)
}

export default Watchlist