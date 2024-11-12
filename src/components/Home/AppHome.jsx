import React from 'react';
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import "../styles/App.css";

function AppHome() {
    const username = localStorage.getItem('username');

    return (
        <main className="App-home">
            <div className='container'>
                <h1>Home</h1>
                <p>Welcome to your Task Tracking App, {username}! Remember that home is still in development</p>
            </div>
            <Link to={"/my-projects"}><div className='card'><AiIcons.AiFillFolder />My Projects</div></Link>
            <Link to={"/my-stories"}><div className='card'><AiIcons.AiFillFolder />My Stories</div></Link>
        </main>
    )
}

export default AppHome;