import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

class Blog extends Component {

  render(){
    return(
      <div className="blog">
        <h2 aria-label="Diatomic Bromine blog">{`<Br>`}<sub>2</sub></h2>

        <p>Check out my full blog site here: <a href="https://diatomic-bromine.netlify.app/">Diatomic Bromine</a></p>

        <p>Or, feel free to check out an individual post below! :)</p><br/>

        <a href="https://diatomic-bromine.netlify.app/posts/sixthpost/">See you Later, Validator</a>
        <p>Rails validations</p><br/>

        <a href="https://diatomic-bromine.netlify.app/posts/fifthpost/">Hey, do you have the time?</a>
        <p>DateTime data type fun</p><br/>

        <a href="https://diatomic-bromine.netlify.app/posts/fourthpost/">Why it's Best to Start with Vanilla - CSS edition ~</a>
        <p>Why it's important to start with the basics of CSS</p><br/>

        <a href="https://diatomic-bromine.netlify.app/posts/thirdpost/">Why it's Best to Start with Vanilla</a>
        <p>Why it's important to start with the basics of JavaScript and HTML</p><br/>

        <a href="https://diatomic-bromine.netlify.app/posts/secondpost/">Using 11ty (and Greg) to Get a Blog Started!</a>
        <p>A quick post about how to use 11ty to build a blog</p><br/>

        <a href="https://diatomic-bromine.netlify.app/posts/firstpost/">If (likeYourJob === false)</a>
        <p>Leaving my Mechanical Engineering career</p><br/>

        <a href="https://diatomic-bromine.netlify.app/posts/intro/">Intro to Br<sub>2</sub></a>
        <p>My first blog post and a little about why I got into Software Engineering!</p><br/>

      </div>
    )
  }
}

export default Blog