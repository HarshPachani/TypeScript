"use strict";
/*
//---------------------For Optional Parameter...--------------------
type FuncType2 = (n: number, m: number, l?: number) => number;

const func2: FuncType2 = (n, m, l) => {
    if(typeof l === 'undefined') return n*m;
    return n * m * l;
}

console.log(func2(25, 23));
console.log(func2(25, 23, 20));
*/
/*
//---------------------For Default(Not Optional) Parameter...--------------------
type FuncType3 = (n: number, m: number, l?: number) => number;

const func3: FuncType3 = (n, m, l=20) => {
    return n * m * l;
}

console.log(func3(25, 23));
*/
/*
//---------------------Rest Operator(Array)...--------------------
// type FuncType2 = (...m: number[]) => number[];
//----OR----
type FuncType2 = (...m: Array<number>) => Array<number>;

const func2: FuncType2 = (...m) => {
    return m;
}

console.log(func2(25, 23, 24, 36, 45));
*/
/*
//---------------------Rest Operator(Object)...--------------------

type FuncType2 = (...m: number[]) => number;

const lol: FuncType2 = function lol(n) {
    return 45;
}

//----------------------Function with Object--------------

interface IProduct {
    readonly id: string, //We can only declare once and cannot change.
    name: string,
    stock: number,
    price: number,
    photo?: string
}
//---------OR----------------
// type Product = {
//     name: string,
//     stock: number,
//     price: number,
//     photo?: string
// }

type GetDataType = (product: IProduct) => void;
const getData: GetDataType = (product) => {
    console.log(product);
}

const productOne: IProduct = {
    id: '1A',
    name: 'Macbook',
    stock: 46,
    price: 9999,
    // photo: 'SamplePhotoURL'
}
getData(productOne);

*/
//------------------- NEVER TYPE ------------------
const errorHandler = () => {
    throw new Error();
};
const theme = 'Dark';
console.log(theme);
