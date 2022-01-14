import React from 'react';
import banner from '../assets/banner.jpeg';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${banner})` }}>
            <div className="headerContainer">
                <h1>Cantinho da Comida</h1>
                <p>COMIDA INDIANA COM UM CLICK.</p>
                <Link to="/menu">
                    <button>Peça Agora</button>
                </Link>
            </div>            
        </div>
    );
}

export default Home;
