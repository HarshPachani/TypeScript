//Format 1
// let a:string = "{23}";
// let nambo:number = 343;
let check:boolean;
let anyway:any;

//Format 2
let nambo=<string>"Harsh";

//Union variable
let surname:string|number; //This means surname can be either string or number.
surname='565'

/*
// Explaination...
type UserName = string | number;
let a:UserName = 20;

const func = (n: number,m: number): number => {
    console.log(n, m);
    return n * m;
    }*/
   
type UserName = (n: number,m: number) => number;

const func: UserName = (n, m) => {
    console.log(n, m);
    return n * m;
}