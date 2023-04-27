import React from 'react'
import { useDispatch } from 'react-redux'
import { setmovieInfo } from '../../../store/slices/movieInfo'
import { setserieInfo } from '../../../store/slices/serieInfo'
import { setvalidMoviesOrSeries } from '../../../store/slices/validMoviesOrSeries'

const CardSearch = ({ results, imgSelected }) => {
    const urlImage = 'https://image.tmdb.org/t/p/w500/'


    const dispatch = useDispatch()

    const handleClick = () => {
        if (results.media_type === "movie") {
            dispatch(setmovieInfo(results.id))
            dispatch(setvalidMoviesOrSeries('movie'))
        }

        if (results.media_type === "tv") {
            dispatch(setserieInfo(results.id))
            dispatch(setvalidMoviesOrSeries('serie'))
        }
    }

    const styleMovent = {
        transform: `translateX(calc(-${imgSelected}/1* 100%))`,
        width: `${results.length * 100}%`
    }


    return (
        <div style={styleMovent} className='allCard__container'>
            <header className='allCard__header' >
                <div className='allCard__imgContainer'>
                    <img onClick={handleClick} className='allCard_img' src={`${urlImage}${results.poster_path ? results.poster_path : results.backdrop_path}`} alt="" />
                </div>
            </header>
        </div>
    )
}
export default CardSearch