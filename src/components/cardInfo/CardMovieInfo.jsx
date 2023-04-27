import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import YouTube from 'react-youtube';
import './CardInfoStyles/CardALLinfo.css'

const CardMovieInfo = () => {
    const urlImage = 'https://image.tmdb.org/t/p/w500'

    const [movieInfo, setmovieInfo] = useState()
    const [movieVideo, setmovieVideo] = useState()
    const [play, setplay] = useState(false)

    const { movieInfoSlice } = useSelector(state => state)

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/${movieInfoSlice}?api_key=c3d737df0f14dab49e5201c9bd5a331f&language=en-EN`

        axios.get(url,)
            .then(res => setmovieInfo(res.data))
            .catch(err => console.log(err))

        const urlVideo = `https://api.themoviedb.org/3/movie/${movieInfoSlice}/videos?api_key=c3d737df0f14dab49e5201c9bd5a331f&language=en-EN`

        axios.get(urlVideo)
            .then(res => setmovieVideo(res.data))
            .catch(err => console.log(err))

    }, [movieInfoSlice])

    const OnclickPlay = () => {
        setplay(true)
        if (play === true) {
            setplay(false)
        }
    }


    const validTrailer = () => {
        if (!movieVideo.results[0].key) {
            return setplay(off)
        } else {
            return <YouTube className='viedo'
                opts={{
                    width: "100%",
                    height: "100%",
                    playerVars: {
                        autoplay: 1
                    }
                }}
                videoId={movieVideo?.results[0].key} />
        }
    }

    return (
        <header className='cardInfo__header'>
            <div className='cardInfo__dateContainer'>
                <h1 className='cardInfo__h1'>{movieInfo?.title}</h1>
                <span className='cardInfo__spanDate'>
                    <div className='cardInfo__voteContainer'>
                        <button onClick={OnclickPlay}>{!play ? 'Play Trailer' : 'Stop Trailer'}</button>
                        <span className='cardInfo__vote' > <p>{Math.trunc(movieInfo?.vote_average * 10)}% Match</p> </span>
                    </div>
                    <p className='cardInfo__Date'>{movieInfo?.release_date}</p>
                    {
                        movieInfo?.genres.map(gender => (
                            <p className='cardInfo__gender' key={gender.id}>{gender.name}</p>
                        ))
                    }
                </span>
            </div>
            <div className='cardInfo__overviewContainer'>
                <h2 className='cardInfo__h2'>Overview</h2>
                <p className='cardInfo__overview'>{movieInfo?.overview}</p>
            </div>
            {!play ?
                <div className='cardInfo__imgContainer'>
                    <span></span>
                    <p></p>
                    <img className='cardInfo__img' src={`${urlImage}${movieInfo?.backdrop_path ? movieInfo?.backdrop_path : movieInfo?.poster_path}`} alt="" />
                </div> :
                <div className='cardInfo__ConatinerVideo'>
                    {
                        validTrailer()
                    }
                </div>
            }
        </header>
    )
}

export default CardMovieInfo