import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import * as AppPropTypes from '../../../lib/propTypes'
import LogInForm from './LogInForm'

class LogInContainer extends Component {
  state = {
    username: '',
    password: ''
  }

  onUsernameChanged = (event) => this.setState({username: event.target.value})

  onPasswordChanged = (event) => this.setState({password: event.target.value})

  render () {
    return <LogInForm
      username={this.state.username}
      onUsernameChanged={this.onUsernameChanged}
      password={this.state.password}
      onPasswordChanged={this.onPasswordChanged}
    />
  }
}

export default withRouter(LogInContainer)
