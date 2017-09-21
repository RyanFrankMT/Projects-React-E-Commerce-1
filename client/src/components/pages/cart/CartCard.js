import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  product: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
  onSetQuantity: PropTypes.func.isRequired
}

const CartCard = ({product, quantity, onSetQuantity}) => {
  return (
    <div>
      <h1>{product}</h1>
      <h3>{quantity}</h3>
      <input type='text' value={quantity} onChange={(event) => onSetQuantity(parseInt(event.target.value))} />
    </div>
  )
}

CartCard.propTypes = propTypes

export default CartCard
