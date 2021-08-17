import React, { Component } from 'react';
import { Switch, Route, Link, Router } from 'react-router-dom'

import About from './About';
import Projects from './Projects';
import Blog from './Blog';
import McKinley from './McKinley';
import Contact from './Contact';

class Home extends Component {

  render(){
    return(
      <div className="home">

        <Switch>

          <Route exact path='/'>
            <div className="bio">

              <h1 className="br-br">{`<br>enna <br>uening`}</h1>
              {/* <h2>{`<a>`}bout me</h2> */}
              <p>Hi! I'm Brenna :)</p>

              <p>I am a short, blonde vegan who lives for ice cream 🍦 and Lightning McQueen ⚡</p>

              <p>When I’m not rewatching the Cars movie for the umpteenth time, I am a Software Engineer who strives to bring creativity into anything and everything I do.</p>

              <p>I started out in Mechanical Engineering with the intent to design roller coasters 🎢, but my motion sickness had other plans. Ultimately, I made the switch to Software Engineering to continue to help fuel my passions for innovative design, figuring out how things work and finding efficient solutions for everyday problems.</p>
            </div>
          </Route>

          <Route path='/about' component={About} />

          <Route path='/projects' component={Projects} />

          <Route path='/blog' component={Blog} />

          <Route path='/pup-page' component={McKinley} />

          <Route path='/contact' component={Contact} />

        </Switch>

      </div>
    )
  }
}

export default Home