// class Player {
//     private height = 34;
//     public weight = 20; //public by default.
//     constructor(height: number, weight: number) {
//         this.height = height;
//         this.weight = weight
//     }

//     myHeight = () => {
//         return this.height
//     }
// }

/*
//INSTEAD OF.... DO THIS...
class Player {
    readonly id: string;

    constructor(
        private height: number, 
        public weight: number,
        protected power: number,
    ) {
        this.id = String(Math.random()*100)
    }

    getMyHeight = () => {
        return this.height
    }
}

class Mario extends Player {
    special: boolean;

    constructor(
        height: number,
        weight: number,
        power: number,
        special: boolean
    ) {
        super(height, weight, power);
        this.special = special;
    }

    getMyPower = () => this.power;
}

const harsh = new Player(100, 150, 23);
// console.log(harsh.height); //It'll give error as this property is private.
// console.log(harsh.power); //Cannot access, because it is protected
console.log(harsh.getMyHeight());
console.log('Harsh\'s ID', harsh.id);

const mario = new Mario(100, 150, 23, true);
console.log('Mario\'s ID: ', mario.id);
console.log('Weight: ', mario.weight);
console.log('Height: ', mario.getMyHeight());
console.log('Power: ', mario.getMyPower());

*/

//-------------GETTERS AND SETTERS-------------------
class Player {
    readonly id: string;

    constructor(
        private height: number, 
        public weight: number,
        protected power: number,
    ) {
        this.id = String(Math.random()*100)
    }

    get getMyHeight(): number{
        return this.height
    }

    set changeHeight(val: number){
        this.height = val;
    }
}

const harsh = new Player(100, 150, 23);
console.log('Height: ', harsh.getMyHeight);
harsh.changeHeight = 500;
console.log('Height: ', harsh.getMyHeight);

interface IProductType {
    name: string;
    price: number;
    stock: number;
    offer?: boolean;
}

interface IGiveId {
    getId: () => string;
}

class Product implements IProductType, IGiveId {
    private id: string = String(Math.random()*1000);
    constructor(
        public name: string, 
        public price: number, 
        public stock: number
    ) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    getId = () => this.id;
}

const product1 = new Product('Macbook', 12000, 20);