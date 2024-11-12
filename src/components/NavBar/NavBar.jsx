import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import "../styles/App.css";

function NavBar({Page}) {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => {
        setSidebar(!sidebar)
    }

    return (
        <>
            <header className="App-header">
                <div className="div-header">
                    <HiMenu className='icon-navbar' onClick={showSidebar} />
                    <h1 className='logo-navbar'>{Page}</h1>
                </div>
            </header>
            <div className={`sidebar ${sidebar ? 'open' : ''}`}>
                <div className='div-logo-sidebar'>
                    <h1 className="logo-navbar">VIEW NAME</h1>
                    <HiOutlineX className='close-btn' onClick={showSidebar} />
                </div>
                <nav className='nav-sidebar'>
                    <div>
                        <ul className='lista-navbar'>
                            <Link to={"/home"} className='text-lista' ><AiIcons.AiFillHome />Home</Link>
                            <Link to={"/my-projects"} className='text-lista' ><AiIcons.AiFillFolder />My Projects</Link>
                            <Link to={"/my-stories"} className='text-lista'><AiIcons.AiFillFolder />My Stories</Link>
                        </ul>
                    </div>
                </nav>
                <div className='div-user'>
                    <Link to={"/settings"} className='text-lista' ><AiIcons.AiFillSetting />Settings</Link>
                </div>
            </div >
        </>
    )
}

export default NavBar;