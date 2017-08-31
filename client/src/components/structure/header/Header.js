import React from 'react'
import NavItem from './NavItem'
import {NavLink} from 'react-router-dom'
import NavItemButton from './NavItemButton'

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

const Header = () =>
  <header style={styles.header}>
    <nav style={styles.navBar}>
      <NavItem path='/' exact >Home</NavItem>
      <NavItem path='/about' >About</NavItem>
      <NavItem path='/products' >Products</NavItem>
      <NavItemButton path='/' >Home</NavItemButton>
      <NavItemButton path='/about' >About</NavItemButton>
      <NavItemButton path='/products' >Products</NavItemButton>
    </nav>
  </header>

export default Header
