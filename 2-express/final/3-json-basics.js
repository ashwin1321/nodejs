const express = require('express')

const app = express()
const { products } = require('../data')

app.get('/', (req, res) => {
  //   res.json([{ name: 'john' }, { name: 'jane' }])
  res.json(products)
})

app.listen(3000, () => {
  console.log('Server starting at port 3000')
})
