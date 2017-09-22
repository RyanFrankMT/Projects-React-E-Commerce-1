import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import * as AppPropTypes from '../../../lib/propTypes'

const propTypes = {
  classes: PropTypes.object.isRequired,
  product: AppPropTypes.product,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  addProductToCart: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired
}

const styles = {
  container: {
    border: [1, 'solid', 'purple'],
    '& > button': {
      margin: 5,
      backgroundColor: '#555'
    }
  },
  bigHeader: {
    color: 'red',
    '&:hover': {
      color: 'yellow'
    }
  },
  mediumHeader: {
    color: 'green'
  },
  smallHeader: {
    color: 'blue'
  }
}

const enhancer = injectSheet(styles)

const ProductsCard = ({classes, product, onDelete, onEdit, addProductToCart, isAdmin}) =>
  <div className={classes.container}>
    <h3 className={classes.bigHeader}>{product.name}</h3>
    <img src={product.image} />
    <p className={classes.mediumHeader}>{product.price}</p>
    {isAdmin ? <button onClick={onDelete}>Delete Product</button> : null}
    {isAdmin ? <p><button onClick={onEdit}>Edit</button></p> : null}
    <button onClick={addProductToCart}>Add to Cart</button>
  </div>

ProductsCard.propTypes = propTypes

export default enhancer(ProductsCard)
