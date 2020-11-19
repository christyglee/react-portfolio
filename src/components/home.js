import React from 'react';
import '../App.css';
// import author from "../images/headshot.png";

const Home = ({name, paragraph, paragraph2, authorImage})=>{

    return(
    <div>
        <div className="home_container">
            <div className="home_head_wrapper">
            <h1> Hello, I 'm <br></br> <span>{name}</span></h1>
            <p>{paragraph} <br></br>{paragraph2}</p>
            </div>
            <div className="image_container">
                <img src={authorImage} alt="Author"></img>
                <div className="bg"></div>
            </div>
            
        </div>
    </div>
    )
}


export default Home;