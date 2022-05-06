const express = require('express')

const app = express()
const { products } = require('../data')

app.get('/', (req, res) => {
  res.send('<h1> Home page </h1><A href="/api/products">Products</a>')
})

app.listen(3000, () => {
  console.log('Server starting at port 3000')
})
