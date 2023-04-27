import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import YouTube from 'react-youtube';

const CardSerieInfo = () => {
    const urlImage = 'https://image.tmdb.org/t/p/w500'

    const [serieInfo, setserieInfo] = useState()
    const [serieVideo, setserieVideo] = useState()
    const [play, setplay] = useState(false)

    const { serieInfoSlice } = useSelector(state => state)

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/tv/${serieInfoSlice}?api_key=c3d737df0f14dab49e5201c9bd5a331f&language=en-EN`

        axios.get(url)
            .then(res => setserieInfo(res.data))
            .catch(err => console.log(err))

        const urlVideo = `https://api.themoviedb.org/3/tv/${serieInfoSlice}/videos?api_key=c3d737df0f14dab49e5201c9bd5a331f&language=en-EN`

        axios.get(urlVideo)
            .then(res => setserieVideo(res.data))
            .catch(err => console.log(err))

    }, [serieInfoSlice])

    const OnclickPlay = () => {
        setplay(true)
        if (play === true) {
            setplay(false)
        }
    }

    // const idTrailer = serieVideo?.results[0].key

    const validTrailer = () => {
        if (!serieVideo.results[0].key) {
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
                videoId={serieVideo?.results[0].key} />
        }
    }


    return (
        <header className='cardInfo__header'>
            <div className='cardInfo__dateContainer'>
                <h1 className='cardInfo__h1'>{serieInfo?.name}</h1>
                <span className='cardInfo__spanDate'>
                    <div className='cardInfo__voteContainer'>
                        <button onClick={OnclickPlay}>{!play ? 'Play Trailer' : 'Stop Trailer'}</button>
                        <span className='cardInfo__vote' > <p>{Math.trunc(serieInfo?.vote_average * 10)}% Match</p> </span>
                    </div>
                    <p className='cardInfo__Date'>{serieInfo?.last_air_date}</p>
                    {
                        serieInfo?.genres.map(gender => (
                            <p className='cardInfo__gender' key={gender.id}>{gender.name}</p>
                        ))
                    }
                </span>
            </div>
            <div className='cardInfo__overviewContainer'>
                <h2 className='cardInfo__h2'>Overview</h2>
                <p className='cardInfo__overview'>{serieInfo?.overview}</p>
            </div>

            {!play ?
                <div className='cardInfo__imgContainer'>
                    <span></span>
                    <p></p>
                    <img className='cardInfo__img' src={`${urlImage}${serieInfo?.backdrop_path ? serieInfo?.backdrop_path : serieInfo?.poster_path}`} alt="" />
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

export default CardSerieInfo