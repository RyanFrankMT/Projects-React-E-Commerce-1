import React from 'react'
import {Route} from 'react-router-dom'
import * as AppPropTypes from '../../../lib/propTypes'
import SignUpContainer from './SignUpContainer'
import LogInContainer from './LogInContainer'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const AuthenticationPage = (props) =>
  <div>
    <h1>Authentication Page</h1>

    <Route path='/auth/log-in' render={() => <LogInContainer domainData={props.domainData} />} />
    <Route path='/auth/sign-up' render={() => <SignUpContainer domainData={props.domainData} />} />
  </div>

AuthenticationPage.propTypes = propTypes

export default AuthenticationPage
