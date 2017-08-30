import React from 'react'
import {Link} from 'react-router-dom'

const Header = (props) =>
  <div>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </nav>
  </div>

export default Header
