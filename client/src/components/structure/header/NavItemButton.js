import React from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

const propTypes = {
  history: PropTypes.object.isRequired,
  path: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func
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

const NavItemButton = (props) => {
const onClick = props.onClick || (() => props.history.push(props.path))

  return <button
    style={styles.button}
    onClick={onClick}>
    {props.children}
  </button>
}

NavItemButton.propTypes = propTypes

export default withRouter(NavItemButton)
