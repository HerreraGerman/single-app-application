import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import '../components/styles/App.css';

const Settings = () => {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('username');
        localStorage.removeItem('email');
        window.location.href = '/';
    };

    return (
        <>
            <NavBar Page={'Settings'} />
            <main className="App-home">
                <div className="settings">
                    <h2><strong>{username}'s settings</strong></h2>
                    <p>Email: {email}</p>
                    <button className='logout-button' onClick={handleLogout}>Logout</button>
                </div>
            </main>
        </>
    );
};

export default Settings;