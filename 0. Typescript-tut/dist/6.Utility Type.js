"use strict";
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
const user = {
    name: 'string',
    email: 'string',
};
const users = {
    john: { age: 34 },
    andrew: { age: 34 },
    elon: { age: 34 },
    jack: { age: 34 },
};
//-----------------------------------------------------------------------------------------------------------------------------
//10. Parameters<Type>
const myFunc = (a, b) => {
    console.log(a + b);
};
//-----------------------------------------------------------------------------------------------------------------------------
//11. ConstructorParameters<Type> => Same as Parameters, but for class.
class Sample {
    constructor(s, t) {
        this.s = s;
        this.t = t;
    }
}
//-----------------------------------------------------------------------------------------------------------------------------
//12. ReturnType<Type>
const myFuncRT = (a, b) => {
    return a + b;
};
//-----------------------------------------------------------------------------------------------------------------------------
//13. InstanceType<Type>
class SampleIT {
    constructor(s, t) {
        this.s = s;
        this.t = t;
    }
}
