import React from 'react'
import {Route} from 'react-router-dom'
import * as AppPropTypes from '../../lib/propTypes'
import Home from '../pages/Home'
import About from '../pages/About'
import ProductsPage from '../pages/products/ProductsPage'
import AuthenticationPage from '../pages/auth/AuthenticationPage'
import Cart from '../pages/cart/Cart'

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
    <Route path='/products'
      render={(routeProps) => <ProductsPage history={routeProps.history} domainData={props.domainData} />}
    />
    <Route path='/auth' render={() => <AuthenticationPage domainData={props.domainData} />}/>
    <Route path='/cart' render={() => <Cart domainData={props.domainData}/>} />
  </div>

Main.propTypes = propTypes

export default Main
