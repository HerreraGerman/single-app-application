import React from 'react';
import { Link } from "react-router-dom";
import NavBar from '../components/NavBar/NavBar';
import AppHome from '../components/Home/AppHome';
import '../components/styles/App.css';

function Home() {
    return(
        <>
            <NavBar Page={'Home'}/>
            <AppHome />
        </>
    );
}

export default Home;