import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <ul>
       <Link to="/"><li>Home</li></Link>      
       <Link to="/count"><li>count</li></Link>      
       <Link to="/map"><li>Map</li></Link>      
      </ul>          
     </div>
  )
}

export default Navbar