import React from "react";
import Loader from 'react-loaders'
import './index.scss'


const Home = () => {
    


    return(
        <>
        <div className="container">
        <h1>Hello I'm Kameron</h1>
        <h2 className="home-text">Web Developer/Designer/Student</h2>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Home;