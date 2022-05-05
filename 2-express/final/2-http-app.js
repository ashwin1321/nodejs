const express = require('express')
const app = express()
const path = require('path')

// setup static and middleware
app.use(express.static('../public')) // serve static files from public folder    /

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../navbar app/index.html')) // sending html files
// adding to static assests
// server side rendering
// })

app.all('*', (req, res) => {
  res.status(404).send('<h1>404</h1> <h1>resource Not Found!</h1>')
})

app.listen(4000, (req, res) => {
  console.log(`server is listening on port 4000.`)
})
