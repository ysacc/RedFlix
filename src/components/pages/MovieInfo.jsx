import React from 'react'
import { useSelector } from 'react-redux'
import CardMovieInfo from '../cardInfo/CardMovieInfo'
import CardSerieInfo from '../cardInfo/CardSerieInfo'

const MovieInfo = () => {
    const { validMoviesOrSeries } = useSelector(state => state)

    const SerieOrMovie = () => {
        if (validMoviesOrSeries === 'movie') {
            return <CardMovieInfo />
        } else {
            return <CardSerieInfo />
        }

    }

    return (
        <div className='movieInfo__Container'>
            {
                SerieOrMovie()
            }
        </div>
    )
}

export default MovieInfo