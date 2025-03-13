import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import styles from './Navbar.module.css';

interface NavbarProps {
    title: string;
    aboutText: string;
    mode: 'light' | 'dark' | 'purple';
    toggleLMode: () => void;
    toggleDMode: () => void;
    togglePMode: () => void;
}

const getNavbarClassName = (mode: NavbarProps['mode']): string => {
    const baseClasses = `${styles.navbar} navbar navbar-expand-lg`;
    switch (mode) {
        case 'purple':
            return `${baseClasses} ${styles.navbarPurple}`;
        case 'dark':
            return `${baseClasses} ${styles.navbarDark}`;
        case 'light':
        default:
            return `${baseClasses} ${styles.navbarLight}`;
    }
};

const Navbar: React.FC<NavbarProps> = (props) => {
    return (
        <nav className={getNavbarClassName(props.mode)}>
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
                    <div className={`${styles.modeToggle} mx-3 btn-group`} role="group" aria-label="Basic radio toggle button group">
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

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
    mode: PropTypes.oneOf(['light', 'dark', 'purple']).isRequired,
    toggleLMode: PropTypes.func.isRequired,
    toggleDMode: PropTypes.func.isRequired,
    togglePMode: PropTypes.func.isRequired
};

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
};

export default Navbar;