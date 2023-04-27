import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardSeriesPulation from './cardSeries/CardSeriesPulation'

const SeriesPopulation = () => {
    const [seriePopulations, setseriePopulations] = useState()
    const [page, setpage] = useState(1)
    const [imgSelected, setimgSelected] = useState(0)

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/tv/popular?api_key=c3d737df0f14dab49e5201c9bd5a331f&language=en-EN&page=${page}`;
        axios
            .get(url)
            .then((res) => setseriePopulations(res.data))
            .catch((err) => console.log(err))
    }, [])

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
            <h2>Popular Series</h2>
            <div className='allDiv__movement'>
                <button onClick={handlePrevius} className='allDiv__btn allDivgbtn__left'>
                    <i className='bx bx-chevron-left' ></i>
                </button>
                {
                    seriePopulations?.results.map(seriePopulation => (
                        <CardSeriesPulation
                            key={seriePopulation.id}
                            seriePopulation={seriePopulation}
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

export default SeriesPopulation