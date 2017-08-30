import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'

const Main = (props) =>
  <div>
    <h1>Main</h1>

    <Route path='/' exact component={Home} />
    <Route path='/about' component={About} />
  </div>

export default Main
