import React, { useEffect, useState } from 'react'
import './styleHeaders.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setmovieCategory } from '../../store/slices/movieCategory'
import { setSearchAll } from '../../store/slices/searchAll.slice'
import { setSerieCategory } from '../../store/slices/serieCategory'

const Header = () => {

    const [listMoviesGenre, setlitsMoviesGenre] = useState()
    const [listSeriesGenre, setlistSeriesGenre] = useState()
    const [ClickShow, setClickShow] = useState(true)
    const [ClickSerieShow, setClicSeriekShow] = useState(true)

    const { searchAll } = useSelector(state => state)

    const dispatch = useDispatch()

    const navigate = useNavigate()


    useEffect(() => {
        const urlMovie = 'https://api.themoviedb.org/3/genre/movie/list?api_key=c3d737df0f14dab49e5201c9bd5a331f&language=en-EN'
        axios.get(urlMovie)
            .then(res => setlitsMoviesGenre(res.data))
            .catch(err => console.log(err.response))

        const urlSerie = 'https://api.themoviedb.org/3/genre/tv/list?api_key=c3d737df0f14dab49e5201c9bd5a331f&language=en-EN'
        axios.get(urlSerie)
            .then(res => setlistSeriesGenre(res.data))
            .catch(err => console.log(err.response))

    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        const input = e.target.inputSearch.value.trim().toLowerCase()
        dispatch(setSearchAll(input))
        if (searchAll === '') {
            navigate(`/`)
        } else {
            navigate(`/search`)
        }
    }

    const handleClickMovieCategory = (id) => {
        dispatch(setmovieCategory(id))
        navigate(`/movies`)
    }

    const handleClickSerieCategory = (id) => {
        dispatch(setSerieCategory(id))
        navigate(`/series`)
    }

    const handleClickShow = () => {
        setClickShow(true)
        if (ClickShow === true) {
            setClickShow(false)
        }
    }


    const handleClickSerieShow = () => {
        setClicSeriekShow(true)
        if (ClickSerieShow === true) {
            setClicSeriekShow(false)
        }
    }

    return (
        <div className='all__containerHeader'>
            <h1 className='nav_title'>
                <Link className='link__title' to='/'>REDFLIX</Link>
            </h1>
            <header className='nav__header'>
                <ul className='nav__ul'>
                    <li>
                        <form className='home__form' onSubmit={handleSubmit}>
                            <button className='homeForm_btn'>
                                <i className='bx bx-search-alt'></i>
                            </button>
                            <input className='homeForm_input' id='inputSearch' type="text" />
                        </form>
                    </li>
                    <li ><Link className='nav__link' to='/'> <i className='bx bx-home-alt' ></i> <h2> Home</h2> </Link></li>
                    <li ><Link className='nav__link' to='/trends'><i className='bx bx-trending-up'></i><h2> Tendencias</h2> </Link></li>
                    <li className='li_movie'>
                        <Link className='nav__link' to='/movies'>
                            <i className='bx bx-movie' ></i>
                            <h2> Peliculas</h2>
                        </Link>
                        <div className={ClickShow ? 'home__category' : 'Clickhome__category'}>
                            <header className='homeCategory__header'>
                                <h3 className='homeCategory__h3' onClick={handleClickShow}>Category <i className='bx bx-chevron-down' ></i></h3>
                            </header>
                            <ul className='homeCategory__ul' onClick={handleClickShow}>
                                {
                                    listMoviesGenre?.genres.map(listMovieGenre => (
                                        <li onClick={() => handleClickMovieCategory(listMovieGenre.id)} key={listMovieGenre.id} > {listMovieGenre.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </li>
                    <li >
                        <Link className='nav__link' to='/Series'>
                            <i className='bx bx-tv' ></i>
                            <h2> Series</h2>
                        </Link>
                        <div className={ClickSerieShow ? 'serie__category' : 'Clickserie__category'}>
                            <header className='homeCategory__header'>
                                <h3 className='homeCategory__h3' onClick={handleClickSerieShow} >Category <i className='bx bx-chevron-down' ></i></h3>
                            </header>
                            <ul className='homeCategory__ul serieCategory__ul'>
                                {
                                    listSeriesGenre?.genres.map(listSerieGenre => (
                                        <li onClick={() => handleClickSerieCategory(listSerieGenre.name)} key={listSerieGenre.name} > {listSerieGenre.name}</li>
                                    ))

                                }
                            </ul>
                        </div>
                    </li>
                </ul>
            </header >
        </div>

    )
}

export default Header