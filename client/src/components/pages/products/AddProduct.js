import React from 'react'
import * as AppPropTypes from '../../../lib/propTypes'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const AddProduct = (props) =>
  <div>
    <form>
      <input type='text' />Name
      <input type='text' />Category
      <input type='number' />Price
      <input type='text' />Image
    </form>
  </div>

AddProduct.propTyoes = propTypes

export default AddProduct
