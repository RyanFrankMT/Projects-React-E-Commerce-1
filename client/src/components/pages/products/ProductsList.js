import React from 'react'
import PropTypes from 'prop-types'
import ButtonLink from '../../presentation/ButtonLink'
import ProductsCard from './ProductsCard'

const propTypes = {
  domainData: PropTypes.object.isRequired
}

const ProductsList = (props) =>
  <div>
    <ButtonLink to='/products/add' primary>Add Product</ButtonLink>
    {
      props.domainData.products.map((product) =>
        <ProductsCard
          product={product}
          key={product._id}
          onDelete={() => props.domainData.deleteProduct(product)}
        />
      )
    }
  </div>

ProductsList.propTypes = propTypes

export default ProductsList
