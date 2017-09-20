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
    .then(handleErrors)
    .then(response => response.json())
    .then(json => json.data)
}

const handleErrors = response => {
  if (!response.ok) {
    return response.json()
      .then(({message, data}) => {
        const err = Error(message)
        Object.assign(err, data)
        err.status = response.status
        throw err
      })
  }
  return response
}

export const getAllProducts = () => ajaxRequest('/api/products', 'GET')

export const addProduct = (newProduct) => ajaxRequest('/api/products', 'POST', newProduct)

export const updateProduct = (product) => ajaxRequest(`/api/products/${product._id}`, 'PUT', product)

export const deleteProduct = (productId) => ajaxRequest(`/api/products/${productId}`, 'DELETE')

export const signupUser = (user) => ajaxRequest('signup', 'POST', user)

export const loginUser = (email, password) => ajaxRequest('login', 'POST', {email, password})

export const getUser = () => ajaxRequest('get_user', 'GET')

export const logoutUser = () => ajaxRequest('logout', 'GET')
