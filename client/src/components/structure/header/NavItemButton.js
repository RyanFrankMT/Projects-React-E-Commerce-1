import React from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

const propTypes = {
  history: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

const styles = {
  button: {
    marginLeft: '2em',
    marginRight: '2em',
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderColor: 'rgba (0, 0, 0, 0.5)',
    borderWidth: 'thin',
  }
}

const NavItemButton = (props) =>
  <button
    style={styles.button}
    onClick={() => props.history.push(props.path)}
  >
    {props.children}
  </button>

NavItemButton.propTypes = propTypes

export default withRouter(NavItemButton)
