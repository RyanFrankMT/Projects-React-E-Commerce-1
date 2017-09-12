import React from 'react'
import PropTypes from 'prop-types'
import * as AppPropTypes from '../../../lib/propTypes'

const propTypes = {
  product: AppPropTypes.product,
  onNameChanged: PropTypes.func.isRequired,
  onCategoryChanged: PropTypes.func.isRequired,
  onPriceChanged: PropTypes.func.isRequired,
  onImageChanged: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

const EditProductForm = ({product, onNameChanged, onCategoryChanged, onPriceChanged, onImageChanged, onCancel, onSubmit}) =>
  <form onSubmit={onSubmit}>
    Name: <input type='text' value={product.name} onChange={onNameChanged} />
    Category: <input type='text' value={product.category} onChange={onCategoryChanged} />
    Price: <input type='number' value={product.price} onChange={onPriceChanged} />
    Image: <input type='text' value={product.image} onChange={onImageChanged} />
    <input
      type='submit'
      value='Submit'
      disabled={
        !product.name || !product.category || !product.price || !product.image
      }
    />
    <button
      type='button'
      onClick={onCancel}
    >
      Cancel
    </button>
  </form>

EditProductForm.propTypes = propTypes

export default EditProductForm
