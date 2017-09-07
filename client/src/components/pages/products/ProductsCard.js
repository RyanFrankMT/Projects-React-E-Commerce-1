import React from 'react'
import PropTypes from 'prop-types'
import * as AppPropTypes from '../../../lib/propTypes'

const propTypes = {
  product: AppPropTypes.product,
  onDelete: PropTypes.func.isRequired
}

const ProductsCard = (props) =>
  <div>
    <h3>{props.product.name}</h3>
    <img src={props.product.image} />
    <p>{props.product.price}</p>
    <button onClick={props.onDelete}>Delete Product</button>
  </div>

ProductsCard.propTypes = propTypes

export default ProductsCard
