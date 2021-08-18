import React, { Component } from 'react';
import { Route, Link, NavLink } from 'react-router-dom'

class About extends Component {

  render(){
    return(
      <div className="about">

        <Route path='/about'>
          Choose a side ~
        </Route>
        <br/>

        {/* <NavLink exact to='/about/professional' activeClassName="about-selected">
          <button className="about-button">Professional Side</button>
        </NavLink>

        <NavLink exact to='/about/fun' activeClassName="about-selected">
          <button className="about-button">Fun Side</button>
        </NavLink> */}

        <NavLink exact to='/about/professional' className="about-button" activeClassName="active">
          Professional Side
        </NavLink>

        <NavLink exact to='/about/fun' className="about-button" activeClassName="active">
          Fun Side
        </NavLink>


        {/* <h2>{`<a>`}bout me</h2> */}

          {/* <Route exact path={['/about', '/about/professional']}> */}

          <Route exact path='/about/professional'>
            <h2>{`<a>`}bout me</h2>

            <p>Like I mentioned before, I am a short, blonde vegan who loves ice cream and Lightning McQueen.</p>

            <p>I live in DC with my husband, Greg, and our crazy but cute staffie, McKinley. Highly recommend checking out my <a href="https://www.instagram.com/bwennuh/">Instagram</a> if you want puppy pics :)</p>

            <p>I am a Mechanical Engineer turned Software Engineer, but one thing has always stayed the same - I love learning how things work.</p>

            <p>I studied Mechanical Engineering at the University of Virginia (WaHooWa, Class of 2014!), and I got first got into Mechanical Engineering for two things:<br/><br/>
              1) I was (and still kinda am) obsessed with roller coasters<br/>
              2) I find the String Theory ✨ fascinating ✨<br/>
              </p>
              <p>
              My goal was to design roller coasters. But. But but but - did you know it's <em>hard</em> to get a job as a roller coaster designer? (apparently those jobs aren't as necessary as some) And, because I needed ~ a ~ job, I wound up getting into the into the Architecture/Engineering/Construction (AEC) industry.</p>

            <p>I worked at a few different MEP consulting engineering firms, working on a variety of building designs in the DC Metro area. And while some projects were super cool, I just never truly felt passionate about doing HVAC design. I mean, don't get me wrong - proper ventilation is super important. But... it's not roller coasters.</p>

            <p>So to quote <a href="https://en.wikipedia.org/wiki/Sally_Carrera">Sally Carrera</a> here (because if you know me, you know I'm going to throw as many Cars references into anything I do), "And you know what? It never felt... happy."</p>

            <p>The one big credit I'll give to my time in the AEC industry was that it helped me fall in love with coding again. My first experience coding was with Java while in undergrad, and while I liked it then, I also couldn't be bothered to learn past the bare minimum because, and I quote, "I won't need coding to design roller coasters."</p>
            
            <p> Okay so a) I'm pretty sure that's not even <em>actually</em> true and b)  re was one main thing in the engineering world that spoke to me, and that was 3D modeling. I have a love for BIM and Revit that goes above most people's heads, and have previously joked with colleagues that my goal was to just work with Revit (or rather, Autodesk) some day.</p>

            <p>If you haven't heard of <a href="https://www.autodesk.com/">Autodesk</a>, I highly recommend giving them a look. They create some of the coolest modeling software around, and Autodesk Inventor is one of the main things that first got me into engineering. And you know what software and apps always need? Software engineers and developers.</p>
            <p>So, I decided it was time to start trying something new! Something that'll give me more freedom for creatitivy, and something that'll help me be passionate about what I do again :)</p>
          </Route>

          <Route exact path='/about/fun'>
            <h2>{`<a>`}bout me</h2>
            
            <p>Fun Side Info goes ~ here ~</p>
          </Route>

      </div>
    )
  }
}

export default About