import React, {Component} from 'react'
import Layout from './components/structure/Layout'
import * as ServerApi from './lib/serverApi'

class DomainDataProvider extends Component {
  state = {
    isLoaded: false,
    products: [],
    user: null,
    cart: {}
  }

  methods = {
    getAllProducts: () =>
      ServerApi.getAllProducts()
        .then(products => products.map(p => ({
          ...p,
          price: (p.price / 100).toFixed(2)
        })))
        .then(products =>
          this.setState({
            isLoaded: true,
            products: products
          })),

    addProduct: (newProduct) =>
      ServerApi.addProduct(newProduct)
        .then(this.methods.getAllProducts),

    deleteProduct: (productId) =>
      ServerApi.deleteProduct(productId)
        .then(this.methods.getAllProducts),

    updateProduct: (product) =>
      ServerApi.updateProduct(product)
        .then(this.methods.getAllProducts),

    findProductById: (productId) => this.state.products.find(p => p._id === productId),

    signupUser: (user) =>
      ServerApi.signupUser(user)
        .then(user => {
          this.setState({user})
          return user
        }),

    loginUser: (email, password) =>
      ServerApi.loginUser(email, password)
        .then(user => {
          this.setState({user})
          return user
        }),

    getUser: () =>
      ServerApi.getUser()
        .then(user => {
          this.setState({user})
          return user
        }),

    logoutUser: () =>
      ServerApi.logoutUser()
        .then(() => this.setState({user: null})),

    addProductToCart: (itemId) => {
      const {cart} = this.state
      cart[itemId] = cart[itemId] || 0
      cart[itemId] += 1
      this.setState({cart})
    },

    setProductQuantityInCart: (itemId, quantity) => {
      const {cart} = this.state
      if (quantity > 0) {
        cart[itemId] = quantity
      } else {
        delete cart[itemId]
      }
      this.setState({cart})
    }
  }

  getTotalProductsInCart = () => {
    const {cart} = this.state
    const values = Object.values(cart)
    let total = 0
    for (let i = 0; i < values.length; i++) {
      total = total + values[i]
    }
    return total
  }

  componentDidMount () {
    this.methods.getAllProducts()
    this.methods.getUser()
  }

  render () {
    const domainData = {
      ...this.state,
      ...this.methods,
      loggedIn: this.state.user != null,
      loggedOut: this.state.user == null,
      totalProductsInCart: this.getTotalProductsInCart(),
      isAdmin: this.state.user != null && this.state.user.local.isAdmin
    }

    return this.state.isLoaded ? <Layout domainData={domainData} /> : null
  }
}

export default DomainDataProvider
