import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardMoviesGenres from './cardMovies/CardMoviesGenres'

const MoviesGenres = () => {
    const [MoviesGenres, setMoviesGenres] = useState()
    const [page, setpage] = useState(1)
    const [imgSelected, setimgSelected] = useState(0)

    const { movieCategory } = useSelector(state => state)


    useEffect(() => {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=c3d737df0f14dab49e5201c9bd5a331f&language=en-EN&include_adult=false&include_video=false&page=${page}&with_genres=${movieCategory}&with_watch_monetization_types=flatrate`;

        axios
            .get(url)
            .then((res) => setMoviesGenres(res.data))
            .catch((err) => console.log(err))
    }, [movieCategory])


    const handlePrevius = () => {
        setimgSelected(imgSelected - 1)
        if (imgSelected < 0) {
            setimgSelected(0)
        }
    }
    const handleNext = () => {
        setimgSelected(imgSelected + 1)
        if (imgSelected > 12) {
            setimgSelected(0)
        }

    }


    return (
        <div className='allDiv__container'>
            <h2> Gender </h2>
            <div className='allDiv__movement'>
                <button onClick={handlePrevius} className='allDiv__btn allDivgbtn__left'>
                    <i className='bx bx-chevron-left' ></i>
                </button>
                {
                    MoviesGenres?.results.map(MovieGenre => (
                        <CardMoviesGenres
                            key={MovieGenre.id}
                            MovieGenre={MovieGenre}
                            imgSelected={imgSelected}
                        />
                    ))
                }
                <button className='allDiv__btn allDivbtn__right'>
                    <i onClick={handleNext} className='bx bx-chevron-right'></i>
                </button>
            </div>
        </div>
    )
}
export default MoviesGenres