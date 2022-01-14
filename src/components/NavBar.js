import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import ReorderIcon from '@mui/icons-material/Reorder';


function NavBar() {
    const [showLinks, setShowLinks] = useState(false);
    function Click() {
        setShowLinks(!showLinks);
    }
    return (
        <div className="navbar">
            <div className="leftSide" id={showLinks ? "open" : "close"}>
                <img src={logo} />
                <div className="hiddenLinks">
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/about">Sobre</Link>
                    <Link to="/contact">Contato</Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">Sobre</Link>
                <Link to="/contact">Contato</Link>
                <button>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    )
}

export default NavBar;