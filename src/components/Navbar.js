import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render(){
    return(
      <div className="navbar">
        <Link to='/'>
          <p className="br2">{`<br>`}<sup>2</sup></p>
          {/* <button className="navbar-button">Home</button> */}
        </Link>


        <Link to='/about'>
          <button className="navbar-button">About</button>
        </Link>

        <Link to='/projects'>
          <button className="navbar-button">Projects</button>
        </Link>

        <Link to='/blog'>
          <button className="navbar-button">Diatomic Bromine [Br<sub>2</sub>]</button>
        </Link>

        <Link to='/pup-page'>
          <button className="navbar-button">McKinley Corner</button>
        </Link>

        {/* <button className="navbar-button">Camooflage</button> */}
        <Link to='/contact'>
          <button className="navbar-button">Contact</button>
        </Link>

      </div>
    )
  }
}

export default Navbar