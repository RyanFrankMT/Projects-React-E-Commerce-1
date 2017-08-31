import React from 'react'
import {domainData} from '../../lib/propTypes'
import {Route} from 'react-router-dom'
import * as AppPropTypes from '../../lib/propTypes'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const styles = {
  main: {
    marginTop: '3em',
    marginBottom: '3em'
  }
}

const Main = (props) =>
  <div style={styles.main}>
    <h1>Main</h1>
    <Route path='/' exact component={Home} />
    <Route path='/about' component={About} />
    <Route path='/products' render={(routeProps) => <Products history={routeProps.history} domainData={props.domainData} />} />
  </div>

Main.propTypes = propTypes

export default Main
