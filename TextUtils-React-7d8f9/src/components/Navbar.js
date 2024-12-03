import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`bg-${props.mode === 'light' ? 'white' : 'gray-800'} shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link className={`text-${props.mode === 'light' ? 'gray-800' : 'white'} text-xl font-bold`} to="/">
              {props.title}
            </Link>
            <div className="ml-10 flex items-baseline space-x-4">
              <Link className={`text-${props.mode === 'light' ? 'gray-600' : 'gray-300'} hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`} to="/">
                Home
              </Link>
              <Link className={`text-${props.mode === 'light' ? 'gray-600' : 'gray-300'} hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`} to="/about">
                {props.aboutText}
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ml-3">
              <span className={`mr-2 text-sm text-${props.mode === 'light' ? 'gray-600' : 'gray-300'}`}>
                {props.mode === 'light' ? 'Enable Dark Mode' : 'Disable Dark Mode'}
              </span>
              <label htmlFor="toggle" className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    id="toggle"
                    className="sr-only"
                    onClick={props.toggleMode}
                  />
                  <div className={`block w-14 h-8 rounded-full ${props.mode === 'light' ? 'bg-gray-300' : 'bg-blue-600'}`}></div>
                  <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${props.mode === 'dark' ? 'transform translate-x-6' : ''}`}></div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired
};

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About'
};