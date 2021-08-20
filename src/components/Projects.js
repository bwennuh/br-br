import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

class Projects extends Component {

  render(){
    return(
      <div className="projects">
        <h2 aria-label="Projects">{`<p>`}rojects</h2>

        <p>Keep checking back for project updates and new projects ~</p>

        <p>Current projects:</p>

        <div className="projects-container">

          <div className="project-info">
            <h3>Camooflage</h3>
            {/* <img src="https://i.imgur.com/0s5Q1Ie.png" alt="Moo - a cute, pudgy cartoon cow mascot and logo" className="project-logos"/> */}

            <p>A non-dairy replacement app for those with allergies, vegan lifestyles, or just want to know all about non-dairy options. Think Pinterest, but for vegan milks, cheeses, and more!</p>

            <img src="https://i.imgur.com/3bHRs0k.png" alt="Login screen for the Camooflage non-dairy replacement app" className="project-pics"/>

            <p>The Camooflage GitHub page can be found <a href="https://github.com/bwennuh/camooflage-frontend">here</a>!</p>
          </div>

          <div className="project-info">
            <h3>Color Splash</h3>

            <p>A game challenging players to “splash” the whole board with one color, in the least amount of turns!</p>

            <img src="https://camo.githubusercontent.com/0500dcd940c243e87f9748f54ddc3292e010978cf50a22edf7ea474f2e1ef637/68747470733a2f2f692e696d6775722e636f6d2f596f50656a71632e706e67" alt="Home page of the Color Splash game" className="project-pics"/>

            <p>The Color Splash GitHub page can be found <a href="https://github.com/bwennuh/color-splash">here</a>!</p>
          </div>

          <div className="project-info">
            <h3>Farm Roots</h3>

            <p>An online farmer’s market app, providing a consolidated place where farmers can market and sell their products directly to consumers online!</p>

            <p>The FarmRoots GitHub page can be found <a href="https://github.com/bwennuh/farm-roots-frontend">here</a>!</p>
          </div>

          <div className="project-info">
            <h3>Sweet Shop</h3>

            <p>A dessert option planning app for the Sweet Shop - the shop is looking for feedback on their current dessert option contenders, and also want to get some recommendations for other dessert ideas!</p>

            <p>The Sweet Shop GitHub page can be found <a href="https://github.com/bwennuh/sweet-shop-frontend">here</a>!</p>
          </div>

        </div>




      </div>
    )
  }
}

export default Projects