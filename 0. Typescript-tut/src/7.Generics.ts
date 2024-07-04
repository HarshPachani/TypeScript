/*
//Here, T means CustomType
const funcG = <T>(n: T): T => {
    return n;
}

const ans = funcG(20);
const ans2 = funcG('20');
const ans3 = funcG(true);
*/

const funcG = <T>(n: T): T => {
    return n;
}

type Person = {
    name: string;
    age: number;
}

const person1: Person = {
    name: 'Harsh',
    age: 22
};

// const ans = funcG(person1);//We can write like this, but the good practice is to write like this...
const ans = funcG<Person>(person1);

console.log(ans.name) //Harsh
console.log(ans.age) //22

//Example 2:
//Here, extends means U's type should be what is T's Type
const func2 = <T, U extends T>(n: T, o: U): { n: T, o: U } => {
    return { n, o };
}

const ans4 = func2<number, number>(20, 25);

//Example 3:
type Person3 = {
    name: string,
    age: number,
}

const users3: Person3[] = [
    { name: 'Harsh', age: 22 },
    { name: 'Harsh2', age: 222 },
    { name: 'Harsh3', age: 223 },
    { name: 'Harsh4', age: 224 },
]

const filterByPeoples = <T, U extends keyof T>(arr: T[], property: U, value: T[U]): T[] => {
    return arr.filter(item => item[property] === value);
};

const filteredPeopleByName = filterByPeoples(users3, "name", "Harsh2");
const filteredPeopleByAge = filterByPeoples(users3, "age", 22);
console.log(filteredPeopleByName);
console.log(filteredPeopleByAge);