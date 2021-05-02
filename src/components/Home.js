import React from 'react'
import '../css/Home.css'
import image from '../images/bg-image.jpg';

const Home = () => {
    return (
        <div className="home">
            <div className="home__item">
                <img src={image} alt="" className="home__image"/>
            </div>
            
        </div>
    )
}

export default Home
