import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  name: PropTypes.string.isRequired,
  onNameChanged: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  onCategoryChanged: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
  onPriceChanged: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  onImageChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
}

const AddProductForm = (props) =>
  <form onSubmit={props.onSubmit}>
    Name: <input type='text' value={props.name} onChange={props.onNameChanged} />
    Category: <input type='text' value={props.category} onChange={props.onCategoryChanged} />
    Price: <input type='number' value={props.price} onChange={props.onPriceChanged} />
    Image: <input type='text' value={props.image} onChange={props.onImageChanged} />
    <input
      type='submit'
      value='Submit'
      disabled={
        !props.name || !props.category || !props.price || !props.image
      }
    />
    <button onClick={props.onCancel}>Cancel</button>
  </form>

AddProductForm.propTypes = propTypes

export default AddProductForm
