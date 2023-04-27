import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardSeriesGenres from './cardSeries/CardSeriesGenres'

const SeriesGenres = () => {
    const [SeriesGenres, setSeriesGenres] = useState()
    const [imgSelected, setimgSelected] = useState(0)

    const { serieCategory } = useSelector(state => state)



    useEffect(() => {
        const url = `https://api.themoviedb.org/3/search/tv?api_key=c3d737df0f14dab49e5201c9bd5a331f&language=en-US&query=${serieCategory}&page=1&include_adult=false`;

        axios
            .get(url)
            .then((res) => setSeriesGenres(res.data))
            .catch((err) => console.log(err))
    }, [serieCategory])


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
            <h2>{serieCategory}</h2>
            <div className='allDiv__movement'>
                <button onClick={handlePrevius} className='allDiv__btn allDivgbtn__left'>
                    <i className='bx bx-chevron-left' ></i>
                </button>
                {
                    SeriesGenres?.results.map(SerieGenre => (
                        <CardSeriesGenres
                            key={SerieGenre.id}
                            SerieGenre={SerieGenre}
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

export default SeriesGenres