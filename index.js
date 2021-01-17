require("dotenv").config();
var cors = require('cors')
const express = require("express");
const app = express();
app.use(cors())
var bodyParser = require("body-parser");
const port = process.env.PORT || 4444;
const Kreator = require("./route-kreator/kreator");
// db is importing the var from the connect folder/module
const db = require("./database/connection/connect");
// importing the mongoose model created for mongo.
const uModel = require("./database/models/users");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// ---------------------------------------------------------------------------imports/modules end

app.post("/api/u-c", (req, res) => {
  const obj = JSON.parse(JSON.stringify(req.body)); // req.body = [Object: null prototype] { title: 'product' }
  let k = new Kreator(req.body.route, req.body.function, req.body, res);
  // k.kRoute()
  uModel.create(
    { 
      user: "Shyaboi", 
      routes: ["/ok", "/dingus"] },

    function (err, small) {
      if (err) console.error(err);
      // saved!
      console.log("user saved");
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
