import React from 'react'
import PropTypes from 'prop-types'

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
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.aboutText}</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                    {/* <div className={`form-check form-switch mx-3 text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div> */}
                    <div style={{backgroundColor :'white'}} class="mx-3 btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" onClick={props.toggleLMode}/>
                        <label class="btn btn-outline-primary" htmlFor="btnradio1">Light Mode</label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" onClick={props.toggleDMode}/>
                        <label class="btn btn-outline-primary" htmlFor="btnradio2">Dark Mode</label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" onClick={props.togglePMode}/>
                        <label class="btn btn-outline-primary" htmlFor="btnradio3">Purple Mode</label>
                    </div>
                    {/* <div class="btn-group mx-3" role="group" aria-label="Basic example">
                        <button type="button" onClick={props.toggleLMode} class="btn btn-primary">Light Mode</button>
                        <button type="button" onClick={props.toggleDMode} class="btn btn-primary">Dark Mode</button>
                        <button type="button" onClick={props.togglePMode} class="btn btn-primary">Green Mode</button>
                    </div> */}
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