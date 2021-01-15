const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const port = process.env.PORT || 4444

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.post('/api/u-c', (req, res) => {
  console.log(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})