import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import * as AppPropTypes from '../../../lib/propTypes'
import LogInForm from './LogInForm'

class LogInContainer extends Component {
  static propTypes = {
    domainData: AppPropTypes.domainData,
    history: PropTypes.object.isRequired
  }
  state = {
    email: '',
    password: ''
  }

  onEmailChanged = (event) => this.setState({email: event.target.value})

  onPasswordChanged = (event) => this.setState({password: event.target.value})

  onCancel = () => this.props.history.push('/')

  onSubmit = (event) => {
    event.preventDefault()
    this.props.domainData.loginUser(this.state.email, this.state.password)
      .then(() => this.props.history.push('/products'))
  }

  render () {
    return <LogInForm
      email={this.state.email}
      onEmailChanged={this.onEmailChanged}
      password={this.state.password}
      onPasswordChanged={this.onPasswordChanged}
      onSubmit={this.onSubmit}
    />
  }
}

export default withRouter(LogInContainer)
