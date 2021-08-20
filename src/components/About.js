import React, { Component } from 'react';
import { Route, Link, NavLink } from 'react-router-dom'

class About extends Component {

  render(){
    return(
      <div className="about">

        <Route path='/about'>
          <h2>choose {`<a>`} side ~</h2>
        </Route>

        <NavLink exact to='/about/professional' className="about-button" activeClassName="active">
          Professional Side
        </NavLink>

        <NavLink exact to='/about/fun' className="about-button" activeClassName="active">
          Fun Side
        </NavLink>

          {/* <h2>{`<a>`}bout me</h2> */}

          {/* <Route exact path={['/about', '/about/professional']}> */}

          <Route exact path='/about/professional'>
            <h2 aria-label="About me">{`<a>`}bout me</h2>

            <img src="https://i.imgur.com/rctmEtP.jpg" alt="Brenna smiling outside in a green jacket" className="brenna-pics lightning"/>

            <p>TL;DR When I’m not rewatching the Cars movie for the umpteenth time, I am a Software Engineer who strives to bring creativity into anything and everything I do.</p>

            <p>I started out in Mechanical Engineering with the intent to design roller coasters 🎢, but my motion sickness had other plans. Ultimately, I made the switch to Software Engineering to continue to help fuel my passions for innovative design, figuring out how things work and finding efficient solutions for everyday problems.</p>

            <p>TL; But gonna read anyways:</p>

            <p>I live in DC with my husband, Greg, and our crazy but cute staffie, McKinley. Peep the McKinley Corner for puppy pics 🐶</p>

            <p>I am a Mechanical Engineer turned Software Engineer, but one thing has always stayed the same - I love learning how things work.</p>

            <p>I studied Mechanical Engineering at the University of Virginia (WaHooWa, Class of 2014!), and I got first got into Mechanical Engineering for two things:<br/><br/>
              1) I was (and still kinda am) obsessed with roller coasters<br/>
              2) I find the String Theory ✨ fascinating ✨<br/>
            </p>

            <p>My goal was to design roller coasters. But. But but but - did you know it's <em>hard</em> to get a job as a roller coaster designer? (Apparently those jobs aren't as necessary as some. Also I get motion sick AF.) And, because I needed ~ a ~ job, I wound up getting into the into the Architecture/Engineering/Construction (AEC) industry.</p>

            <p>I worked at a few different MEP consulting engineering firms, working on a variety of building designs in the DC Metro area. And while some projects were super cool, I just never truly felt passionate about doing HVAC design. I mean, don't get me wrong - proper ventilation is super important. But... it's not roller coasters.</p>

            <p>So to quote <a href="https://en.wikipedia.org/wiki/Sally_Carrera">Sally Carrera</a> here (because if you know me, you know I'm going to throw as many Cars references into anything I do), "And you know what? It never felt... happy."</p>

            <p>The one big credit I'll give to my time in the AEC industry was that it helped me fall in love with coding again (thank you to Revit + Dynamo for making me brush up on some Python!).</p>
            
            <p>That, and the fact that Greg had always teased me about getting into front-end development like him if I was tired of Mechancial Engineering. I had kept telling him that I had to do some coding in college, and I never hated it! I just couldn't be bothered to learn anything past the bare minimum to pass because, and I quote, "I won't need coding to design roller coasters."</p>
            
            <p> Okay so I'm <em>pretty</em> sure that's not even true, but regardless - I had never considered myself doing coding full-time.</p>

            <p>But alas, here we are ~</p>

            <p>Long story short, basically on a whim - I finally quit my mechanical engineering job, enrolled at <a href="https://flatironschool.com/">Flatiron</a>, and I haven't looked back!</p>

            <p>I have a newfound love of JavaScript and React, I can tolerate Ruby (but only if Rails is involved), and I'm determined for CSS and I to get along (right now, it's a love-hate relationship).</p>

            <p>Now the goal is to find a new ✨ software engineering ✨ job ~</p>

          </Route>

          <Route exact path='/about/fun'>
            <h2 aria-label="About me">{`<a>`}bout me</h2>
            
            {/* <p>Fun Side Info goes ~ here ~</p> */}

            <p>Like I mentioned before, I am a short, blonde vegan lives for ice cream 🍦 and Lightning McQueen ⚡</p>

            <p>I am big into running and spinning. If you need a running buddy, HMU (but we'll go at my pace because I am ✨ slow ✨). My goal is to usually end a run at a coffee shop because I <em>will run for iced coffee plzkthx</em>. Iced vanilla oat milk lattes are my favorite 🥤</p>

            <p>Will also run for wine though 🍷 Preferably sauv blanc or sparkling rosé ~</p>

            <p>In my free time, my main hobbies include drawing, playing video games, and watching movies.</p>

            <p>✍️</p>

            <p>I don't share a ~ lot ~ of my artwork since I get self conscious about it, but every now and then I'll post something to my Instagram story! But for this year, one of my New Year's resolutions was to make a drawing for every day of the year! So for that, I'll share my favorite thing I've drawn so far which is Moo - a cute lil cow I drew who ended up being the design for the logo + mascot for my app, Camooflage! (Peep the projects for more info on that 🐮)</p>

            <p>Meet Moo!</p>

            <p>{`<< Moo pic goes here >>`}</p>

            <p>🎬 </p>

            <p>Obviously Cars is my ⚡ favorite ⚡ movie, but I love movies in general. My main favorites are animated movies and horror movies (I know, I know - very different tastes here), but I'm also obsessed with anything sci-fi and/or fantasy related too. I can also appreciate a good action movie, but I'll pass on the rom-coms.</p>

            <p>🎮</p>

            <p>You can find me on pretty much any gaming system, but it'll most likely be a Nintendo system. The Gamecube is my favorite, but the Switch is real good too. I'm also on the PC a lot - probably playing Overwatch, Rocket League, Deep Rock Galactic, or Apex.</p>

            <p>Rergardless of system, find me at <b>@bwennuh</b> :)</p>


          </Route>

      </div>
    )
  }
}

export default About