import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import * as AppPropTypes from '../../../lib/propTypes'
import SignUpForm from './SignUpForm'

class SignUpContainer extends Component {
  static propTypes = {
    domainData: AppPropTypes.domainData,
    history: PropTypes.object.isRequired
  }

  state = {
    customerName: '',
    email: '',
    username: '',
    password: ''
  }

  onCustomerNameChanged = (event) => this.setState({customerName: event.target.value})

  onEmailChanged = (event) => this.setState({email: event.target.value})

  onUsernameChanged = (event) => this.setState({username: event.target.value})

  onPasswordChanged = (event) => this.setState({password: event.target.value})

  onSubmit = (event) => {
    event.preventDefault()
  }

  render () {
    return <SignUpForm
      customerName={this.state.customerName}
      onCustomerNameChanged={this.onCustomerNameChanged}
      email={this.state.email}
      onEmailChanged={this.onEmailChanged}
      username={this.state.username}
      onUsernameChanged={this.onUsernameChanged}
      password={this.state.password}
      onPasswordChanged={this.onPasswordChanged}
    />
  }
}

export default withRouter(SignUpContainer)
