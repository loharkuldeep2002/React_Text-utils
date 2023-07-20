import React from 'react';
import PropTypes from 'prop-types';


export default function Navbar(props) {
  return (
    <nav className={`navbar bg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand  fw-light fs-1">{props.title}</a>
        <form className="d-flex" role="search">
          {/* <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button> */}
          <label className={`switch me-5 text-${props.mode==='light'? 'Dark' : 'light'}`}>
            <input type="checkbox" onClick={props.toggleMode} className="checkbox" />
            <div className="slider"></div>
          </label>


          {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'Dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toogleMode} type="checkbox" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode </label>
          </div> */}

        </form>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string
};


/*
// default props 
navbar.defaultProps = {
  title: 'Set title here'
};
*/