class Kreator {
    constructor(route, funtion, request,response){
        this.route = route;
        this.funtion = funtion;
        this.request = request;
        this.response = response;
    }
    kPrint(){
        console.log(this.route, this.funtion)
    }

    kRoute(){
        const express = require('express')
        const app = express()
        const reqq = this.request
        const ress = this.response
        console.log(reqq)
        app.get('/api/u-c', (req, res) => {
            console.log(reqq, ress)
            ress.send('Hello World!')
          })
    }

}

module.exports = Kreator