import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setmovieInfo } from '../../../store/slices/movieInfo'
import { setserieInfo } from '../../../store/slices/serieInfo'
import { setvalidMoviesOrSeries } from '../../../store/slices/validMoviesOrSeries'
import audio from '/movement.mp3'
import ReactHowler from 'react-howler'

const CardTrending = ({ trending, imgSelected }) => {
    const urlImage = 'https://image.tmdb.org/t/p/w500/'

    const [sond, setsond] = useState(false)


    const dispatch = useDispatch()

    const styleMovent = {
        transform: `translateX(calc(-${imgSelected}/1* 100%))`,
        width: `${trending.length * 100}%`
    }

    const handleClick = () => {
        if (trending.media_type === "movie") {
            dispatch(setmovieInfo(trending.id))
            dispatch(setvalidMoviesOrSeries('movie'))
        }

        if (trending.media_type === "tv") {
            dispatch(setserieInfo(trending.id))
            dispatch(setvalidMoviesOrSeries('serie'))
        }
    }

    const mouseSond = () => {
        setsond(true)
    }

    return (
        <div style={styleMovent} className='allCard__container'>
            <ReactHowler
                src={audio}
                playing={sond}
                volume={0.3}
            />
            <header className='allCard__header' >
                <div className='allCard__imgContainer'>
                    <img onMouseOver={mouseSond} onMouseOut={() => { setsond(false) }} className='allCard_img' onClick={handleClick} src={`${urlImage}${trending.poster_path ? trending.poster_path : trending.backdrop_path}`} alt="" />
                </div>
            </header>
        </div>
    )
}

export default CardTrending