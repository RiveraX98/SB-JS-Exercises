


class Vehicle  {
    constructor(make, model, year){
    
        this.make = make;
        this.model = model ;
        this.year= year;
    
      // const {make, model, year} = this 
    }

    honk() {
        return ("beep");
    }

    toString(){
        return  `The vehicle is a ${this.make} ${model} from ${year}`
    }

}

const honda = new Vehicle("honda","civic",2019)
console.log (honda.honk())


class Car extends Vehicle{
    constructor(make, model,year){
    super(make,model,year)
    this.numWheels = 4 }
}


console.log(Car.honk())
console.log()

class Mootorcycle extends Vehicle{
    constructor(make, model,year){
    super(make,model,year)
    this.numWheels = 2
}
revEngine (){
    return "VROOM!!"
}

}

class Garage{
    constructor(){
this.vehicles = [] 
this.capacity = 4
}
    add(newVehicle){
        if (!(newVehicle instanceof Vehicle)){
            return "Only vehicles are allowed in here"
        }
         if  (this.vehicles.length>= this.capacity){
            return "Sorry we are full"
         }
            else {
                this.vehicles.push(newVehicle)
                return "vehicle added"
            }
        }
    }


