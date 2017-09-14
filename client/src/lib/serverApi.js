const ajaxRequest = (url, method, body) => {
  console.log(url, method, body)
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const options = {
    body: JSON.stringify(body),
    headers: headers,
    method: method
  }
  return fetch(url, options)
    .then(response => response.json())
    .then(json => json.data)
}

const getAllProducts = () => ajaxRequest('/api/products', 'GET')

const addProduct = (newProduct) => ajaxRequest('/api/products', 'POST', newProduct)

const updateProduct = (product) => ajaxRequest(`/api/products/${product._id}`, 'PUT', product)

const deleteProduct = (productId) => ajaxRequest(`/api/products/${productId}`, 'DELETE')

export {getAllProducts, addProduct, updateProduct, deleteProduct}
