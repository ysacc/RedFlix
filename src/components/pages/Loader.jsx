import React, { useState } from 'react';
import './stylesPages/Loader.css'
import ReactHowler from 'react-howler'
import audio from '/netflix.mp3'


const Loader = () => {
    const [closeloader, setcloseloader] = useState(true)


    const timer = setTimeout(() => {
        setcloseloader(false)

    }, 4000);

    return (
        <div className={closeloader ? 'background' : 'close__loader'} >
            <div className='logo'>
                <div className='brush1'>
                    <div className="color"></div>
                    <div className="lines"></div>
                </div>
                <div className="brush2">
                    <div className="color2"></div>
                </div>
                <div className="brush3"></div>
            </div>
            <ReactHowler
                src={audio}
                playing={true}
                volume={0.5}
            />
        </div >
    );
};

export default Loader;
