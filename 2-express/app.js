const express = require('express')

const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
  res.send('<h1> Home page </h1><A href="/api/products">Products</a>')
})

app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product
    return { id, name, image }
  })
  res.json(newProducts)
})

//      // For each id we may use the following code but not feasible for bigger data

// app.get('/api/products/1', (req, res) => {
//   const singleProduct = products.find((product) => product.id === 1) // query

//   res.json(singleProduct)
// })

//     // more of a dynamic approachs

app.get('/api/products/:productID', (req, res) => {
  // console.log(req.params)
  const { productID } = req.params
  const singleProduct = products.find(
    (product) => product.id === Number(productID),
  ) // query
  // console.log(singleProduct)
  if (!singleProduct) {
    return res.status(404).send('product does not exists')
  }
  res.json(singleProduct)
})

app.listen(2000, () => {
  console.log('Server starting at port 2000')
})
