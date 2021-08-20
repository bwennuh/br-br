import React, { Component } from 'react';

class Footer extends Component {
  render(){
    return(
      <footer className="footer">

        {/* <a href='https://instagram.com/bwennuh' className="footer-button" onClick={() => window.open("https://instagram.com/bwennuh")}>Instagram</a> */}
        <a href='https://instagram.com/bwennuh' className="footer-button">Instagram</a>
        {/* <button className="footer-button">Instagram</button> */}

        <a href='https://twitter.com/bwennuh' className="footer-button">Twitter</a>
        {/* <button className="footer-button">Twitter</button> */}

        <a href='https://www.linkedin.com/in/brenna-bruening/' className="footer-button">LinkedIn</a>
        {/* <button className="footer-button">LinkedIn</button> */}

        <a href='https://github.com/bwennuh' className="footer-button">GitHub</a>
        {/* <button className="footer-button">GitHub</button> */}

        <a href='https://www.facebook.com/bwennuh' className="footer-button">Facebook</a>
        {/* <button className="footer-button">Facebook</button> */}

      </footer>
    )
  }
}

export default Footer