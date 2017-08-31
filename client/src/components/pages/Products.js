import React from 'react'
import {domainData as domainDataPropType} from '../../lib/propTypes'
import * as AppPropTypes from '../../lib/propTypes'

const PropTypes = {
  domainData: AppPropTypes.domainData
}

const Products = ({domainData}) =>
  <div>
    <h1>Products</h1>
    <p>Number of Products: {domainData.products.length}</p>
  </div>

Products.propTypes = PropTypes

export default Products
