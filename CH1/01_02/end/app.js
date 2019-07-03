class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

    carStats() {
        return `This car has ${this.doors} doors, a ${this.engine} engine and a beautiful ${this.color} color!`;
    }  

    static totalDoors(car1,car2){
        const doors1 =car1.doors;
        const doors2=car2.doors;

        return doors1+doors2;
    }
}

const cx5 = new Car( 4, 'V6', 'grey');
const cx6 =new Car(6,'rt','green');
console.log(Car.totalDoors(cx5,cx6));  
console.log(cx5);
console.log(cx6.carStats())


