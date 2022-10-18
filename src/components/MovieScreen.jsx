

function MovieScreen (props){

const {movieList, page, setPage, list} = props;


const movieDisplay = movieList.map((movie, index) => {

return <h2>{movie.original_title}</h2>;

});



return(
<div className="page">
    <h1>Josh's Movie Theatre</h1>
    <h3>Add a Movie to your Watchlist</h3>
    <div className="movie-container">{movieDisplay}</div>
</div>
)
}

export default MovieScreen;