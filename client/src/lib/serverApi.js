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
    .then(json => callback(json.data))
}

export {getAllProducts, addProduct}
