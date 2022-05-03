const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.post('/user', (req, res) => {
  res.send('Create User')
})
app.all('*', (req, res) => {
  res.status(404).send('<h1> route not found </h1>')
})
app.listen(3000)
