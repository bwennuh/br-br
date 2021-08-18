import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'

class Navbar extends Component {
  render(){
    return(
      <nav className="navbar" aria-label="Main">
        <NavLink to='/' className="navbar-logo" aria-label="Brenna Bruening Portfolio Home">
          <span className="br2">{`<br>`}<sup>2</sup></span>
        </NavLink>

        <NavLink to='/about' className="navbar-button" activeClassName="active">
          About
        </NavLink>

        <NavLink to='/projects' className="navbar-button" activeClassName="active">
          Projects
        </NavLink>

        <NavLink to='/blog' className="navbar-button" activeClassName="active" aria-label="Diatomic Bromine Blog">
          Diatomic Bromine [Br<sub>2</sub>]
        </NavLink>

        <NavLink to='/pup-page' className="navbar-button" activeClassName="active">
          McKinley Corner
        </NavLink>

        <NavLink to='/contact' className="navbar-button" activeClassName="active">
          Contact
        </NavLink>

      </nav>
    )
  }
}

export default Navbar