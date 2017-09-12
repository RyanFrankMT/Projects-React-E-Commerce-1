import React from 'react'
import {Route} from 'react-router-dom'
import {domainData} from '../../../lib/propTypes'
import ProductsList from './ProductsList'
import AddProductContainer from './AddProductContainer'
import EditProductContainer from './EditProductContainer'

const propTypes = {
  domainData
}

const ProductsPage = (props) =>
  <div>
    <h1>Products</h1>

    <Route path='/products' exact render={() => <ProductsList domainData={props.domainData} />} />
    <Route path='/products/add' render={() => <AddProductContainer domainData={props.domainData} />} />
    <Route path='/products/edit/:productId' render={() => <EditProductContainer domainData={props.domainData} />} />
  </div>

ProductsPage.propTypes = propTypes

export default ProductsPage
