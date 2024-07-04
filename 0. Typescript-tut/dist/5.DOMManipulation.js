"use strict";
//Type Assertion
//Method 1
// const btn = document.getElementById('btn') as HTMLElement;
//Method 2
// const btn = <HTMLElement> document.getElementById('btn');
//Method 3
//This Not-Operator(!) defines that btn is definitely not null.
const btn = document.getElementById('btn');
//We'll have to do this, but not in query selector.
const img = document.getElementById('myImg');
img.src;
const img2 = document.querySelector('img');
img2.src;
btn.onclick;
const form = document.getElementById('myForm');
const myInput = document.querySelector('form > input');
form.onsubmit = (e) => {
    e.preventDefault();
    const value = Number(myInput.value);
    const h2 = document.createElement('h2');
    h2.textContent = String(value + 20);
    const body = document.querySelector('body');
    body.append(h2);
};
const myObj = {
    name: 'Harsh',
    email: "harsh@gmail.com",
};
const getName = () => {
    return myObj['name'];
};
const getEmail = () => {
    return myObj['email'];
};
//Instead of writing each and every key of an object...
// const getData = (key: "name" | "email"): string => {
//     return myObj[key];
// }
//We can do this...
const getData = (key) => {
    return myObj[key];
};
getData('name');
