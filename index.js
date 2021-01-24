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

//setup a 'cache' of all the db data
var all;
const getAll = async () => {
  all = await rModel.find({});
  //  console.log(all)
};
getAll();

//route for getting and creating the user routes from the 'cached' user created routes
app.get("/u-c-r/:route", function (request, response) {
  //seting up the 'final' function that will run the eval and return the route
  const final = async (err)=> {
    //route handler
  let rot = "/" + request.params.route;
//find the route in the cached all object
try {
  const result = await all.find(({ route }) => route === rot);
    // do the function eval of the JS string...might be pretty dangerous...but lets see!

    var fin = await eval(result.funktion)
  
} catch (error) {
  response.send(error.toString())
  
}
  }
    final()
 
});


app.get("/u-c/all-routes", (request, response) => {
  var allRoutes = []
  for (route of all){
   allRoutes.push(route.route)
  }
  response.send(allRoutes);
});

// user created api posting route
app.post("/u-c/new", (req, res) => {
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
getAll();
console.log('all updated')
});
app.get('*', function(req, res) {
  res.send('Not a route yet, but you can make one <a href="http://uselessapi.com/editor/">here</a>.')
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
