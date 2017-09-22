import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  product: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
  onSetQuantity: PropTypes.func.isRequired
}

const CartCard = ({product, quantity, onSetQuantity}) => {
  const onQuantityChanged = (event) => {
    const newQuantity = parseInt(event.target.value, 10) || 0
    if (newQuantity > 0 || window.confirm('Are you sure?')) {
      onSetQuantity(newQuantity)
    }
  }
  return (
    <div>
      <h1>{product.name}</h1>
      <h3>{quantity}</h3>
      <input type='number' value={quantity} onChange={onQuantityChanged} />
      <button onClick={onQuantityChanged}>Remove from Cart</button>
    </div>
  )
}

CartCard.propTypes = propTypes

export default CartCard
