const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const port = process.env.PORT || 4444
const Kreator = require('./route-kreator/kreator')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.post('/api/u-c', (req, res) => {
  const obj = JSON.parse(JSON.stringify(req.body)); // req.body = [Object: null prototype] { title: 'product' }
  let k = new Kreator(req.body.route, req.body.function)
k.kreatorPrint()
console.log(obj);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})