//Type Utility
/*
Partial<Type>
Required<Type>
Readonly<Type>
Record<keys, Type>
Pick<Type, Keys>
Omit<Type, Keys>
Exclude<Type, ExcludedUnion>
Extract<Type, Union>
NonNullable<Type>
Parameters<Type>
ConstructorParameters<Type>
ReturnType<Type>
InstanceType<Type>
*/

//-----------------------------------------------------------------------------------------------------------------------------
// 1. Partial<Type> => It makes Option of any type of property
type User = {
    name: string,
    email: string,
}
/*
type User2 = {
    name?: string,
    email?: string,
}*/
//Instead We can Do this...
type User2 = Partial<User>;

//-----------------------------------------------------------------------------------------------------------------------------
//2. Required<Type> => Opposite of Partial.
type RUser = {
    name?: string,
    email: string,
}

type RUser2 = Required<RUser>;


//-----------------------------------------------------------------------------------------------------------------------------
//3. Readonly<Type>
type ROUser = {
    name: string,
    email: string,
}
const user: Readonly<ROUser> = {
    name: 'string',
    email: 'string',
}

//-----------------------------------------------------------------------------------------------------------------------------
//4. Record<keys, Type> => It is used to mix more than two types.
/*
type UserRecord = {
    name: string;
    email: string;
}

type UserRecord2 = Record<"name"|"email", string>
*/
//Example
interface UserInfo {
    age: number;
}

type UserName2 = 'john' | 'andrew' | 'elon' | 'jack';
const users: Record<UserName2, UserInfo> = {
    john: { age: 34 },
    andrew: { age: 34 },
    elon: { age: 34 },
    jack: { age: 34 },
}
    
//-----------------------------------------------------------------------------------------------------------------------------
//5. Pick<Type, Keys>
interface IOrderInfo {
    readonly id: string,
    user: string,
    city: string,
    state: string,
    country: string,
    status: string,
}
//ShippingInfo will only have city, state, country.
type ShippingInfo = Pick<IOrderInfo, 'city'|'state'|'country'>;

//-----------------------------------------------------------------------------------------------------------------------------
//6. Omit<Type, Keys>
interface IShippingInfo {
    city: string,
    state: string,
    country: string,
}
//Random will only have city and state property, and exclude the country.
type Random = Omit<IShippingInfo, 'country'>;

//-----------------------------------------------------------------------------------------------------------------------------
//7. Exclude<Type, ExcludedUnion>
type ERandom = Exclude<string | number, number>; //This means exclude all the keys which's type is number.

//-----------------------------------------------------------------------------------------------------------------------------
//8. Extract<Type, Union>
type ExRandom = Extract<string | number, string>; //This will only store string.

//-----------------------------------------------------------------------------------------------------------------------------
//9. NonNullable<Type>
type MyUnion = string | number | boolean | null | undefined;
type NRandom = NonNullable<MyUnion>; //NRandom will not have null and undefined.

//-----------------------------------------------------------------------------------------------------------------------------
//10. Parameters<Type>
const myFunc = (a:number, b:string) => {
    console.log(a+b);
}
//RandomFunc will have array of the parameters of the passed type.
type RandomFunc = Parameters<typeof myFunc>;

//-----------------------------------------------------------------------------------------------------------------------------
//11. ConstructorParameters<Type> => Same as Parameters, but for class.
class Sample {
    constructor(public s:string, public t:string) {}
}
type SampleClass = ConstructorParameters<typeof Sample>;

//-----------------------------------------------------------------------------------------------------------------------------
//12. ReturnType<Type>
const myFuncRT = (a:number, b:string) => {
    return a+b;
}
type FuncTypeRT = ReturnType<typeof myFuncRT>;

//-----------------------------------------------------------------------------------------------------------------------------
//13. InstanceType<Type>
class SampleIT {
    constructor(public s:string, public t:string) {}
}

type RandomIT = InstanceType<typeof SampleIT>