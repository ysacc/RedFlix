import React from 'react'
import MoviesTheaters from '../movies/MoviesTheaters'
import SeriesOnline from '../series/SeriesOnline'
import Trending from '../trending/Trending'

const Trends = () => {
    return (
        <div className='trends__conatiner'>
            <h2>Trends</h2>
            <Trending />
            <MoviesTheaters />
            <SeriesOnline />
        </div>
    )
}

export default Trends