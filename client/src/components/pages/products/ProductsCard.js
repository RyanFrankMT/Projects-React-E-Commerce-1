import React from 'react'
import PropTypes from 'prop-types'
import * as AppPropTypes from '../../../lib/propTypes'

const propTypes = {
  product: AppPropTypes.product,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
}

const ProductsCard = ({product, onDelete, onEdit}) =>
  <div>
    <h3>{product.name}</h3>
    <img src={product.image} />
    <p>{product.price}</p>
    <button onClick={onDelete}>Delete Product</button>
    <p><button onClick={onEdit}>Edit</button></p>
  </div>

ProductsCard.propTypes = propTypes

export default ProductsCard
