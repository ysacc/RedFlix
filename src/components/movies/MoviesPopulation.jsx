import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardMoviesPopulation from './cardMovies/CardMoviesPopulation'
import '../pages/stylesPages/allCard.css'


const MoviesPopulation = () => {
    const [moviePopulations, setmoviePopulations] = useState()
    const [page, setpage] = useState(1)
    const [imgSelected, setimgSelected] = useState(0)

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=c3d737df0f14dab49e5201c9bd5a331f&language=en-EN&page=${page}`;
        axios
            .get(url)
            .then((res) => setmoviePopulations(res.data))
            .catch((err) => console.log(err))
    }, [])


    const handlePrevius = () => {
        setimgSelected(imgSelected - 1)
        if (imgSelected < 0) {
            setimgSelected(0)
            setpage(page > 1 ? page - 1 : 1)
        }
    }
    const handleNext = () => {
        setimgSelected(imgSelected + 1)
        if (imgSelected > 11) {
            setimgSelected(0)
            setpage(page + 1)
        }
    }

    return (
        <div className='allDiv__container'>
            <h2>Popular Movies</h2>
            <div className='allDiv__movement'>
                <button onClick={handlePrevius} className='allDiv__btn allDivgbtn__left'>
                    <i className='bx bx-chevron-left' ></i>
                </button>
                {
                    moviePopulations?.results.map(moviePopulation => (
                        <CardMoviesPopulation
                            key={moviePopulation.id}
                            moviePopulation={moviePopulation}
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

export default MoviesPopulation