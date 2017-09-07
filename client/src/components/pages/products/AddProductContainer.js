import React, {Component} from 'react'
import * as AppPropTypes from '../../../lib/propTypes'
import {withRouter} from 'react-router-dom'
import AddProductForm from './AddProductForm'
import PropTypes from 'prop-types'

class AddProductContainer extends Component {
  static propTypes = {
    domainData: AppPropTypes.domainData,
    history: PropTypes.object.isRequited
  }

  state = {
    name: '',
    category: '',
    price: 0,
    image: ''
  }

  onNameChanged = (event) => this.setState({name: event.target.value})

  onCategoryChanged = (event) => this.setState({category: event.target.value})

  onPriceChanged = (event) => {
    const value = event.target.value
    let price = (parseFloat(value) || 0)
    this.setState({price: price})
  }

  onImageChanged = (event) => this.setState({image: event.target.value})

  onSubmit = (event) => {
    event.preventDefault()
    this.props.domainData.addProduct(this.state)
    this.props.history.push('/products')
  }

  onCancel = () => this.props.history.push('/products')

  render () {
    return <AddProductForm
      name={this.state.name}
      onNameChanged={this.onNameChanged}
      category={this.state.category}
      onCategoryChanged={this.onCategoryChanged}
      price={this.state.price}
      onPriceChanged={this.onPriceChanged}
      image={this.state.image}
      onImageChanged={this.onImageChanged}
      onSubmit={this.onSubmit}
      onCancel={this.onCancel}
    />
  }
}

export default withRouter(AddProductContainer)
