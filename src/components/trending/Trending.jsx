import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardTrending from './cardTrending/CardTrending'
import '../pages/stylesPages/allCard.css'

const Trending = () => {
    const [trendings, settrendings] = useState()
    const [page, setpage] = useState(1)

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/trending/all/day?api_key=c3d737df0f14dab49e5201c9bd5a331f&language=es-ES&page=${page}`
        axios
            .get(url)
            .then((res) => settrendings(res.data))
            .catch((err) => console.log(err))
    }, [])

    const [imgSelected, setimgSelected] = useState(0)

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
            <h2>Trends</h2>
            <div className='allDiv__movement'>
                <button onClick={handlePrevius} className='allDiv__btn allDivgbtn__left'>
                    <i className='bx bx-chevron-left' ></i>
                </button>
                {
                    trendings?.results.map(trending => (
                        <CardTrending
                            key={trending.id}
                            trending={trending}
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

export default Trending