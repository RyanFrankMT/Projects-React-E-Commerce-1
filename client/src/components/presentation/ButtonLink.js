import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired
}

const defaultProps = {
  isPrimary: false
}

const styles = {
  link: {
    border: '1px solid blue',
    borderRadius: 5,
    padding: 5,
    fontSize: 14,
    textDecoration: 'none'
  },
  primaryLink: {
    backgroundColor: 'blue',
    color: 'white'
  },
  secondaryLink: {
    backgroundColor: 'white',
    color: 'blue'
  }
}

const ButtonLink = (props) => {
  const mergedStyles = Object.assign({}, styles.link, props.primary ? styles.primaryLink: styles.secondaryLink)
  return <Link to={props.to} style={mergedStyles}>{props.children}</Link>
}

ButtonLink.propTypes = propTypes
ButtonLink.defaultProps = defaultProps

export default ButtonLink
