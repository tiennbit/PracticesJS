function Airplane(name){
    this.name = name;
    this.isFlying = false;
}

const airplanePrototype = {
    takeoff(){
        this.isFlying = true;
    },
    land(){
        this.isFlying = false;
    }
}

Airplane.prototype = airplanePrototype;

airplane1 = new Airplane("tiennb")
airplane1.takeoff()
console.log(airplane1) 