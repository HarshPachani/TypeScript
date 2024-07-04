type Obj = {
    height: number;
    weight: number;
    gender?: boolean; //Optional property.
}

//Same as type, but a short different.
interface IObj {
    height: number;
    weight: number;
    gender?: boolean; //Optional property.
};

type FuncType = (n: number, m: number) => void;

interface INewObj extends IObj {
    scolar: boolean;
    func: FuncType;
}

const employee: INewObj = {
    height: 3434,
    weight: 3434,
    scolar: true,
    func: (n, m) => {
        console.log(n*m);
    }
}

const employee2: INewObj = {
    height: 123,
    weight: 456,
    scolar: true,
    func: (n, m) => {
        console.log(n*m);
    }
}

employee2.func(20, 40);


const obj: Obj = {
    height: 3434,
    weight: 3434,
    gender: true,
}