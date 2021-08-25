import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

class Contact extends Component {

  render(){
    return(
      <div className="contact">
        <h2 aria-label="Contact details">contact {`<details>`}</h2>

        <p>Let's be friends / co-workers / [insert your own label here ;)]!</p>

        <p>Choose your poison below ~</p>

        {/* <form id='contact-form'>
          <input type='text' name='user_name' placeholder='Name' />
          <br/>
          <input type='email' name='user_email' placeholder='Email' />
          <br/>
          <textarea name='message' placeholder='Message'/>
          <br/>
          <input type='submit' value='Send' />
        </form> */}

      </div>
    )
  }
}

export default Contact