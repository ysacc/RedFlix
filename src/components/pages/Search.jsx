import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardSearch from './cardPages/CardSearch'

const Search = () => {
    const [Searchs, setSearchs] = useState()
    const [page, setpage] = useState(1)
    const [imgSelected, setimgSelected] = useState(0)

    const { searchAll } = useSelector(state => state)


    useEffect(() => {
        const url = `https://api.themoviedb.org/3/search/multi?api_key=c3d737df0f14dab49e5201c9bd5a331f&language=es-Es&query=${searchAll}&page=1&include_adult=false`;

        axios
            .get(url)
            .then((res) => setSearchs(res.data))
            .catch((err) => console.log(err))
    }, [searchAll])


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
        <div className='search__conatiner'>
            <h2>YOUR RESEARCH</h2>
            <div className='allDiv__container'>
                <h2>{searchAll}</h2>
                <div className='allDiv__movement'>
                    <button onClick={handlePrevius} className='allDiv__btn allDivgbtn__left'>
                        <i className='bx bx-chevron-left' ></i>
                    </button>
                    {
                        Searchs?.results.map(results => (
                            <CardSearch
                                key={results.id}
                                results={results}
                                imgSelected={imgSelected}
                            />
                        ))
                    }
                    <button className='allDiv__btn allDivbtn__right'>
                        <i onClick={handleNext} className='bx bx-chevron-right'></i>
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Search