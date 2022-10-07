import React, { useEffect, useState } from 'react'
import { API_KEY, imageUrl } from '../../constants'
import './banner.css'
import axios from '../axios'


const getRandomNumber = (max) => {
    let min = 0;
    return Math.round(Math.random() * (max - min) + min);
}
function Banner() {

    const [movie, setMovie] = useState();



    useEffect(() => {
        getRandomNumber();
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`).then((response) => {
            const num = getRandomNumber(response.data.results.length);
            console.log(response.data.results[num]);
            setMovie(response.data.results[num]);
        });

    }, [])


    return (
        <div
            style={ { backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})` } }
            className='banner'>

            <div className='content'>
                <h1 className='title'>{ movie ? movie.title : '' }</h1>
                <div className='banner_buttons'>
                    <button className='button'> Play</button>
                    <button className='button'>My List</button>
                </div>
                <h1 className='description'>{ movie ? movie.overview : '' }</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner