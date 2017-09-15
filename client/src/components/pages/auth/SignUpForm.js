import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  customerName: PropTypes.string.isRequired,
  onCustomerNameChanged: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  onEmailChanged: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  onUsernameChanged: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  onPasswordChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

const SignUpForm = (props) =>
  <form onSubmit={props.onSubmit}>
    Customer Name: <input type='text' value={props.customerName} onChange={props.onCustomerNameChanged} />
    Email: <input type='text' value={props.email} onChange={props.onEmailChanged} />
    Username: <input type='text' value={props.username} onChange={props.onUsernameChanged} />
    Password: <input type='text' value={props.password} onChange={props.onPasswordChanged} />
    <input
      type='submit'
      value='Submit'
    />
  </form>

SignUpForm.propTypes = propTypes

export default SignUpForm
