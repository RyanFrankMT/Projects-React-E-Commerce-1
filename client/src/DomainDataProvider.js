import React, {Component} from 'react'
import Layout from './components/structure/Layout'
import * as ServerApi from './lib/serverApi'

class DomainDataProvider extends Component {
  state = {
    isLoaded: false,
    products: []
  }

  componentDidMount () {
    this.getAllProducts()
  }

  getAllProducts = () =>
    ServerApi.getAllProducts()
      .then(products =>
        this.setState({
          isLoaded: true,
          products: products
        }))

    addProduct = (newProduct) =>
      ServerApi.addProduct(newProduct, this.getAllProducts)
        .then(this.getAllProducts)

    deleteProduct = (product) =>
      ServerApi.deleteProduct(product._id)
        .then(this.getAllProducts)

    updateProduct = (product) =>
      ServerApi.updateProduct(product)
        .then(this.getAllProducts)

    render () {
      const domainData = {
        isLoaded: this.state.isLoaded,
        products: this.state.products,
        addProduct: this.addProduct,
        deleteProduct: this.deleteProduct,
        updateProduct: this.updateProduct
      }

      return this.state.isLoaded ? <Layout domainData={domainData} /> : null
    }
}

export default DomainDataProvider
