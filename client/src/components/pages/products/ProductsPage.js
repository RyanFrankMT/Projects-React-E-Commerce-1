import React from 'react'
import {Route} from 'react-router-dom'
import {domainData} from '../../../lib/propTypes'
import ProductsList from './ProductsList'
import AddProductContainer from './AddProductContainer'

const propTypes = {
  domainData
}

const ProductsPage = (props) =>
  <div>
    <h1>Products</h1>

    <Route path='/products' exact render={() => <ProductsList domainData={props.domainData} />} />
    <Route path='/products/add' render={(innerProps) => <AddProductContainer domainData={props.domainData} history={innerProps.history} />} />
  </div>

ProductsPage.propTypes = propTypes

export default ProductsPage
