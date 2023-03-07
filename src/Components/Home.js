//import { grey } from '@material-ui/core/colors';
import React from 'react'

import { useState } from 'react';
const Home = () => {
  const [active, setActive] = useState(false);
  const [thanks, setThanks] = useState("Search new jobs");
  const handle = () => {
    setActive(!active);
    setThanks("Thanks for applying ");
  }

  return (
    <div className='jumbotron'>
      <div className="container">
        <button className='btn btn-primary btn-lg'
          // onMouseOver="btnMouseOVer()"
          onClick={handle} style={{ opacity: 0.9, color: "white", backgroundColor: active ? "green" : "" }}> Apply Job</button>
          <div>
            <button type='button'className='btn btn-outline-primary'>success...</button>
            <button type="button" className="btn btn-danger disabled">..Success</button>
           
          </div>
        
        <div className="conform text-center text-danger">
          <h2>{thanks}</h2>
          </div>
      
        </div>
    </div>

  )
}

export default Home