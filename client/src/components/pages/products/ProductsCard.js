import React from 'react'
import * as AppPropTypes from '../../../lib/propTypes'

const propTypes = {
  product: AppPropTypes.product
}

const ProductsCard = (props) =>
  <div>
    <h3>{props.product.name}</h3>
    <img src={props.product.image} />
    <p>{props.product.price}</p>
  </div>

ProductsCard.propTypes = propTypes

export default ProductsCard
