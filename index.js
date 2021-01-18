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
const rModel = require("./database/models/routes");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// ---------------------------------------------------------------------------imports/modules end
//setup mongoose model new creation

// const getAll = async ()=> {
//   var all =  await rModel.find({});
//   console.log(all)
// }
// getAll()

var routes = []
const getAllRoutes = async ()=> {
  let all =  await rModel.find({});
  for(x of all){
    console.log(x.route)
    app.get(x.route,(request,response)=> {
      console.log(x)
      response.send(x)
    })
    
   routes.push(x.route)
  }
}
getAllRoutes()



app.get("/all-routes", (request,response)=> {
  request.send(routes)
})



app.get('/router',(request,response)=> {

  response.send(routes)
  
})


// user created api posting route
app.post("/api/u-c", (req, res) => {
  //parsing body object
  const obj = JSON.parse(JSON.stringify(req.body));
  const route = req.body.route;
  const uFunc = req.body.funktion;
  console.log(route, uFunc);
  let k = rModel.create(
    {
      user: "Shyaboi",
      route: route,
      funktion: uFunc,
    },
  
    function (err, small) {
      if (err) console.error(err);
      // saved!
      console.log("user saved");
    }
  );
  k;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
