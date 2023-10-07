import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

const navstyle=(mode)=>{
    if(mode === 'purple'){
        return {
            backgroundColor : '#432874',
            color: 'white'
        }
    }
}

export default function Navbar(props) {
    return (
        <nav style={navstyle(props.mode)} className ={ `navbar border-bottom border-${props.mode==='light'?'dark':'light'} navbar-expand-lg navbar-${props.mode==='light'?'light':'dark'} bg-${props.mode}` }>
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
                    <div style={{backgroundColor :'white'}} class="mx-3 btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off"  onClick={props.toggleLMode}/>
                        <label class="btn btn-outline-primary" htmlFor="btnradio1">Light Mode</label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" onClick={props.toggleDMode}/>
                        <label class="btn btn-outline-primary" htmlFor="btnradio2">Dark Mode</label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" onClick={props.togglePMode}/>
                        <label class="btn btn-outline-primary" htmlFor="btnradio3">Purple Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
  };