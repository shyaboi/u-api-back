//importing route kreator class for creating the routes for users(WIP)
const Kreator = require("./route-kreator/kreator");
//importing env vars
require("dotenv").config();
//importing express
const express = require("express");
const app = express();
//importing and using cors
var cors = require("cors");
app.use(cors());
//body parser for parsing json/bson
var bodyParser = require("body-parser");
//process env port for deployment
const port = process.env.PORT || 4444;
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
  const obj = JSON.parse(JSON.stringify(req.body)); 
  const route = req.body.route;
  const uFunc = req.body.funktion;
console.log(route,uFunc)
  // let k = new Kreator(req.body.route, req.body.function, req.body, res);
  // k.kRoute()
  let k = uModel.create(
    {
      user: "Shyaboi",
      routes: ["/ok", route],
      funktion: uFunc
    },

    function (err, small) {
      if (err) console.error(err);
      // saved!
      console.log("user saved");
    }
  );
  k
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
