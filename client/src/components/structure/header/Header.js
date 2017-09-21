import React from 'react'
import NavItem from './NavItem'
import {NavLink} from 'react-router-dom'
import NavItemButton from './NavItemButton'
import * as AppPropTypes from '../../../lib/propTypes'

const styles = {
  navBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  header: {
    position: 'fixed',
    top: 0,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center'
  }
}

const propTypes = {
  domainData: AppPropTypes.domainData
}

const Header = ({domainData}) =>
  <header style={styles.header}>
    <nav style={styles.navBar}>
      <NavItemButton path='/' >Home</NavItemButton>
      <NavItemButton path='/about' >About</NavItemButton>
      <NavItemButton path='/products' >Products</NavItemButton>

      <NavItemButton path='/' onClick={domainData.logoutUser}>Log Out</NavItemButton>
      <NavItemButton path='/log-in'>Log In</NavItemButton>
      <NavItemButton path='/sign-up'>Sign Up</NavItemButton>
    </nav>
  </header>

Header.PropTypes = propTypes

export default Header
