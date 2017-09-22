import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import CartCard from './CartCard'
import * as AppPropTypes from '../../../lib/propTypes'

const propTypes = {
  classes: PropTypes.object.isRequired,
  domainData: AppPropTypes.domainData
}

const styles = {
  container: {
    border: [1, 'solid', 'black'],
    backgroundColor: '#ecf0f1',
    color: '#95a5a6'
  }
}

const enhancer = injectSheet(styles)

const Cart = ({classes, domainData}) => {
  const cartKeys = Object.keys(domainData.cart)
  return (
    <div className={classes.container}>
      {
        cartKeys.length > 0 ? cartKeys.map((productId, index) => {
          const quantity = domainData.cart[productId]
          const product = domainData.products.find((p) => p._id === productId)
          return <CartCard
            product={product}
            quantity={quantity}
            onSetQuantity={(q) => domainData.setProductQuantityInCart(productId, q)}
          />
        })
          : <h1>The Cart is Empty</h1>
      }
    </div>
  )
}

Cart.propTypes = propTypes

export default enhancer(Cart)
