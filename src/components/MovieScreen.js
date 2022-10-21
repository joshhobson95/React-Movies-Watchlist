import MovieCard from "./MovieCard";





function MovieScreen (props){

const {movieList, page, setPage, addMovie, watchList, removeMovie} = props;



const movieDisplay = movieList.map((movie, index) => {
return ( 
<MovieCard movie={movie} addMovie={addMovie} watchList={watchList} removeMovie={removeMovie}/> 
)
});

function decrement () {
setPage(page-1)
}

function increment () {
setPage(page+1)
}





return(
<div className="page">
    <h1>Josh's Movie Theatre</h1>
    <h3>Add a Movie to your Watchlist</h3>
    <div className="btn=container">
        <button onClick={page !==1 && decrement}>Prev</button>
        <button onClick={increment}>Next</button>

    </div>
    <div className="movie-container">{movieDisplay}</div>
</div>
)
}

export default MovieScreen;