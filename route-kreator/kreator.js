class Kreator {
    constructor(route, funtion){
        this.route = route;
        this.funtion = funtion
    }
    kreatorPrint(){
        console.log(this.route, this.funtion)
    }
}

module.exports = Kreator