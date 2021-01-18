class Kreator {
    constructor(route){
        this.route = route;
        // this.funtion = funtion;
        // this.request = request;
        // this.response = response;
    }
    kPrint(){
        console.log(this.route, this.funtion)
    }

    kRoute(){
        const express = require('express')
        const app = express()
        // const reqq = this.request
        // const ress = this.response
        app.get(this.route, (req, res) => {
            // console.log(reqq, ress)
            res.send(this.route)
          })
    }

}

module.exports = Kreator