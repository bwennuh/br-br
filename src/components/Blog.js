import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

class Blog extends Component {

  render(){
    return(
      <div className="blog">
        <h2>{`<br>`}<sub>2</sub></h2>

        <p>Blog stuff goes ~ here ~</p>

        <a href="https://diatomic-bromine.netlify.app/">Diatomic Bromine</a>

      </div>
    )
  }
}

export default Blog