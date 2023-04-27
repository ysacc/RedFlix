import React from 'react'
import MoviesAnime from '../movies/MoviesAnime'
import MoviesGenres from '../movies/MoviesGenres'

import MoviesTerror from '../movies/MoviesTerror'
import MoviesTheaters from '../movies/MoviesTheaters'
import MoviesTop from '../movies/MoviesTop'

const Movies = () => {
    return (
        <div className='movies__container'>
            <h2>Movies</h2>
            <MoviesGenres />
            <MoviesTheaters />
            <MoviesAnime />
            <MoviesTop />
            <MoviesTerror />
        </div>
    )
}

export default Movies
