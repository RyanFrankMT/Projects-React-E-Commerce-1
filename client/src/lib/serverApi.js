const getAllProducts = (callback) => {
  const options = {
    method: 'GET'
  }

  fetch('/api/products', options)
    .then(response => response.json())
    .then(json => callback(json.data))
}

const addProduct = (newProduct, callback) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })
  const options = {
    body: JSON.stringify(newProduct),
    headers: headers,
    method: 'POST'
  }

  fetch('/api/products', options)
    .then(response => response.json())
    .then(response => {
      console.log('Response', response)
      return response
    })
    .then(json => callback(json.data))
}

const deleteProduct = (productId, callback) => {
  const options = {
    method: 'DELETE'
  }

  fetch(`/api/products/${productId}`, options)
    .then(response => response.json())
    .then(json => callback(json.data))
}

export {getAllProducts, addProduct, deleteProduct}
