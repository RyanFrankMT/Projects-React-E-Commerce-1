import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import * as AppPropTypes from '../../../lib/propTypes'
import ButtonLink from '../../presentation/ButtonLink'
import ProductsCard from './ProductsCard'

const propTypes = {
  domainData: AppPropTypes.domainData,
  history: PropTypes.object.isRequired
}

const ProductsList = ({domainData, history}) =>
  <div>
    <Link to='/products/add' primary>Add Product</Link>
    {
      domainData.products.length === 0
        ? <h2>No Products Found</h2>
        : domainData.products.map(p =>
          <ProductsCard
            product={p}
            key={p._id}
            onDelete={() => domainData.deleteProduct(p._id)}
            onEdit={() => history.push(`/products/edit/${p._id}`)}
            addProductToCart={() => domainData.addProductToCart(p._id)}
          />
        )
    }
  </div>

ProductsList.propTypes = propTypes

export default withRouter(ProductsList)
