import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const getNavStyle = (mode) => {
    if (mode === 'purple') {
        return {
            backgroundColor: '#432874',
            color: 'white'
        };
    }
    return {};
};

const Navbar = ({ mode, title, aboutText, toggleLMode, toggleDMode, togglePMode }) => {
    return (
        <nav style={getNavStyle(mode)} className={`navbar border-bottom border-${mode === 'light' ? 'dark' : 'light'} navbar-expand-lg navbar-${mode === 'light' ? 'light' : 'dark'} bg-${mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/TextUtils-React">{title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/TextUtils-React">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{aboutText}</Link>
                        </li>
                    </ul>
                    <div style={{ backgroundColor: 'white' }} className="mx-3 btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" onClick={toggleLMode} />
                        <label className="btn btn-outline-primary" htmlFor="btnradio1">Light Mode</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" onClick={toggleDMode} />
                        <label className="btn btn-outline-primary" htmlFor="btnradio2">Dark Mode</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" onClick={togglePMode} />
                        <label className="btn btn-outline-primary" htmlFor="btnradio3">Purple Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    toggleLMode: PropTypes.func.isRequired,
    toggleDMode: PropTypes.func.isRequired,
    togglePMode: PropTypes.func.isRequired
};

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
};

export default Navbar;