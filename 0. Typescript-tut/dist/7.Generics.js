"use strict";
/*
//Here, T means CustomType
const funcG = <T>(n: T): T => {
    return n;
}

const ans = funcG(20);
const ans2 = funcG('20');
const ans3 = funcG(true);
*/
const funcG = (n) => {
    return n;
};
const person1 = {
    name: 'Harsh',
    age: 22
};
// const ans = funcG(person1);//We can write like this, but the good practice is to write like this...
const ans = funcG(person1);
console.log(ans.name); //Harsh
console.log(ans.age); //22
//Example 2:
//Here, extends means U's type should be what is T's Type
const func2 = (n, o) => {
    return { n, o };
};
const ans4 = func2(20, 25);
const users3 = [
    { name: 'Harsh', age: 22 },
    { name: 'Harsh2', age: 222 },
    { name: 'Harsh3', age: 223 },
    { name: 'Harsh4', age: 224 },
];
const filterByPeoples = (arr, property, value) => {
    return arr.filter(item => item[property] === value);
};
const filteredPeopleByName = filterByPeoples(users3, "name", "Harsh2");
const filteredPeopleByAge = filterByPeoples(users3, "age", 22);
console.log(filteredPeopleByName);
console.log(filteredPeopleByAge);
