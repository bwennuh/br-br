import React, { Component } from 'react';
import { Route, Link, NavLink } from 'react-router-dom'

class About extends Component {

  render(){
    return(
      <div className="about">

        <Route exact path='/about'>
          <h2 aria-label="Choose a side (button)">choose {`<a>`} side ~</h2>

          <div className="choose-a-side-container">
            <div className="choose-a-side-prof">
              <NavLink exact to='/about/professional' className="about-button" activeClassName="active">
                Professional Side
              </NavLink><br/>
              <img src="https://i.imgur.com/Phlkn58.jpg" alt="Brenna smirking and standing with her hands on her hips, in her wedding dress, with her bridesmaids standing behind her" className="brenna-pics rounded-reverse"/><br/>
            </div>

            <div className="choose-a-side-fun">
              <NavLink exact to='/about/fun' className="about-button" activeClassName="active">
                Fun Side
              </NavLink><br/>
              <img src="https://i.imgur.com/hM8mLgB.jpg" alt="Brenna in her wedding dress, with her head thrown back in laughter" className="brenna-pics rounded"/>
            </div>
          </div>

        </Route>

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

            <NavLink exact to='/about/fun' className="about-button peep" activeClassName="active">
              Peep the fun side 🥳
            </NavLink><br/>

          </Route>

          <Route exact path='/about/fun'>
            <h2 aria-label="About me">{`<a>`}bout me</h2>

            <img src="https://i.pinimg.com/originals/fc/d4/12/fcd412b2163a6a0a3b0947b402a245f9.gif"/>

            <p>Welcome to the fun side!</p>
            <p>Lil disclaimer - I'll probably be constantly updating this side so check back later to see if anything's changed ;)</p>

            <img src="https://i.imgur.com/Iz21IPg.jpg" alt="Brenna in a Lightning McQueen print dress, Lightning McQueen print Mickey Mouse ears, and standing next to Lightning McQueen himself at Disney's California Adventure" className="brenna-pics rounded"/>

            <p>Like I mentioned before, I am a short, blonde vegan who lives for ice cream 🍦 and Lightning McQueen ⚡</p>

            <p>I am big into running and spinning. If you need a running buddy, HMU (but we'll go at my pace because I am ✨ slow ✨). My goal is to usually end a run at a coffee shop because I <em>will run for iced coffee plzkthx</em>. Iced vanilla oat milk lattes are my favorite 🥤</p>

            <img src="https://i.imgur.com/t5zb3VZ.jpg" alt="Brenna smiling while running with a tiara on her head and wearing a red tank top and a yellow tutu" className="brenna-pics lightning-tall"/>

            <p>Will also run for wine though 🍷 Preferably sauv blanc or sparkling rosé ~</p>

            <img src="https://i.pinimg.com/originals/71/e8/55/71e855820122eca5641882af85cc0c7c.gif"/>

            <p>In my free time, my main hobbies include drawing, playing video games, and watching movies.</p>

            <p>✍️</p>

            <p>I don't share a ~ lot ~ of my artwork since I get self conscious about it, but every now and then I'll post something to my Instagram story! But for this year, one of my New Year's resolutions was to make a drawing for every day of the year! So for that, I'll share my favorite thing I've drawn so far which is Moo - a cute lil cow I drew who ended up being the design for the logo + mascot for my app, Camooflage! (Peep the projects for more info on that 🐮)</p>

            <p>Meet Moo!</p>

            <img src="https://i.imgur.com/0s5Q1Ie.png" alt="Moo - a cute, pudgy cartoon cow mascot and logo" className="project-logos"/>

            <p>🎬 </p>

            <p>Obviously Cars is my ⚡ favorite ⚡ movie, but I love movies in general. My main favorites are animated movies and horror movies (I know, I know - very different tastes here), but I'm also obsessed with anything sci-fi and/or fantasy related too. I can also appreciate a good action movie, but I'll pass on the rom-coms.</p>

            <img src="https://media2.giphy.com/media/B1CrvUCoMxhy8/giphy.gif?cid=790b7611a26dd42e21d69dccfc42e66455d3a4d4d892f5f9&rid=giphy.gif&ct=g"/>

            <p>🎮</p>

            <p>You can find me on pretty much any gaming system, but it'll most likely be a Nintendo system. The Gamecube is my favorite, but the Switch is real good too. But, my absolute favorite game of all time is Banjo Tooie. (Yes, Banjo Kazooie is also amazing but I do prefer Tooie, if only in part because you can turn Kazooie into a dragon 🐉)</p>

            <img src="https://i.gifer.com/FJns.gif"/>

            <p>I'm also on the PC a lot - probably playing Overwatch, Rocket League, Deep Rock Galactic, or Apex Legends.</p>

            <p>Regardless of system or platform, find me at <b>@bwennuh</b> :)</p>

            <p>🍦</p>

            <p>I love ice cream. Ice cream is the best dessert (don't @ me). I do post a lot of my ice cream pics and endeavors on <a href='https://instagram.com/bwennuh'>Instagram</a>, but my fave is definitely <a href="https://nadamoo.com/">Nada Moo</a>.</p>

            <p>Sometimes I do bake things though, so you can also peep my Instagram for that! I'm always looking for new and creative ways to make 🥕 vegan 🥕 desserts, and definitely let me know if you've got a recommendation 🍰 </p>

            <p>✌️</p>

            <p>That's all I can think of for now fun-wise to talk about with myself, so feel free to reach out if you want to chat about anything further! :) Or you can ⬇️</p>

            <NavLink exact to='/about/professional' className="about-button peep" activeClassName="active">
              Peep the profesh side 🤓
            </NavLink>
          </Route>

      </div>
    )
  }
}

export default About