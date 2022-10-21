import './MovieCard.css'
import React from 'react';

function MovieCard ({ movie, addMovie, removeMovie, watchList }) {

    const inWatchlist = watchList.filter((mov) => {
        return mov.id === movie.id;
    });

const button = inWatchlist.length === 0 ? (
    <button onClick={()=> addMovie(movie)}>Add to List</button>) : (
    <button onClick={()=> removeMovie(movie)}>Remove Movie</button> );
    
    


    return (
        <div className="movie-card">
            <div>
                <img className ="cover-image" alt="movie poster"src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
                <h3>{movie.original_title}</h3>
            </div>
            {button}
        </div>
    );
}

export default MovieCard;

