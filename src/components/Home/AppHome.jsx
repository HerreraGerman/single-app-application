import React from 'react';
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import "../styles/App.css";

function AppHome() {

    return (
        <main className="App-home">
            <div className='container'>
                <h1>Home</h1>
                <p>Home is still in development</p>
            </div>
            <div className='card'><Link to={"/my-projects"}><AiIcons.AiFillFolder />My Projects</Link></div>
            <div className='card'><Link to={"/my-stories"}><AiIcons.AiFillFolder />My Stories</Link></div>
        </main>
    )
}

export default AppHome;