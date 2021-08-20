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

            <h1 className="br-br">{`<br>enna <br>uening`}</h1>
            <div className="bio">

              <div className="bio-containers">
                {/* img src="https://i.imgur.com/rctmEtP.jpg" className="brenna-pics lightning"/> */}
                <img src="https://i.imgur.com/uNuglN7.jpg" alt="Brenna in her Vegan AF shirt with some ice cream" className="brenna-pics rounded bio-pic"/>

              </div>

              <div className="bio-containers">
                <p>Hi! I'm Brenna :)</p>

                <p>I am a short, blonde vegan who lives for ice cream 🍦 and Lightning McQueen ⚡</p>

                <p>Welcome to my portfolio ~</p>

                <p>Many emojis, gifs, and Cars references ahead - you've been warned 🤓</p>

                <img src="https://24.media.tumblr.com/tumblr_lqefsb5fWu1qm6oc3o1_500.gif" alt="I wanted to give the folks a little sizzle Cars gif" className="cars-gifs"/>

                <p>Enjoy!</p>
              </div>

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