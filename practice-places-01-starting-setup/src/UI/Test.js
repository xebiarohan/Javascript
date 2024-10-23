class Car {
    constructor() {
        console.log('Car constructor');

    }

    color() {
        console.log('Colour of the car is Red');
    }
}

class Mazda extends Car {

    constructor() {
        super();
        console.log('mazda constructor');
    }

    name() {
        console.log('Name of the car is Mazda');
    }
}