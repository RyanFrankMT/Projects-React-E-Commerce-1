import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  email: PropTypes.string.isRequired,
  onEmailChanged: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  onPasswordChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

const LogInForm = (props) =>
  <form onSubmit={props.onSubmit}>
    <p> Email: <input type='text' value={props.email} onChange={props.onEmailChanged} /></p>
    <p> Password: <input type='text' value={props.password} onChange={props.onPasswordChanged} /></p>
    <input
      type='submit'
      value='Submit'
    />
  </form>

LogInForm.propTypes = propTypes

export default LogInForm
