import React from 'react';
import { Link } from "react-router-dom";

interface NavbarProps {
    title: string;
    aboutText: string;
    mode: 'light' | 'dark' | 'purple';
    toggleLMode: () => void;
    toggleDMode: () => void;
    togglePMode: () => void;
}

const navstyle = (mode: NavbarProps['mode']): React.CSSProperties => {
    if (mode === 'purple') {
        return {
            backgroundColor: '#432874',
            color: 'white'
        };
    }
    return {};
};

const Navbar: React.FC<NavbarProps> = (props) => {
    return (
        <nav style={navstyle(props.mode)} className={`navbar border-bottom border-${props.mode === 'light' ? 'dark' : 'light'} navbar-expand-lg navbar-${props.mode === 'light' ? 'light' : 'dark'} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/TextUtils-React">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/TextUtils-React">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    <div style={{backgroundColor: 'white'}} className="mx-3 btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" onClick={props.toggleLMode}/>
                        <label className="btn btn-outline-primary" htmlFor="btnradio1">Light Mode</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" onClick={props.toggleDMode}/>
                        <label className="btn btn-outline-primary" htmlFor="btnradio2">Dark Mode</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" onClick={props.togglePMode}/>
                        <label className="btn btn-outline-primary" htmlFor="btnradio3">Purple Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;