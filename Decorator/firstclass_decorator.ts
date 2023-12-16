// add decorator to class

// function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
//     return class extends constructor {
//         newProperty = "new property";
//         hello = "override";
//     };
// }

function LoggerFactory(logString: string) {
    return (constructor: Function) => {
        console.log('constructor  :::->>>', constructor);
        console.log('logString  :::->>>', logString);
    }

}


function Logger(constructor: Function) {
    console.log('Logging...');
    console.log("Constructor ", constructor);
}

function logProp(target: any, key: string) {
    console.log('target  :::->>>', target);
    console.log('key  :::->>>', key);
}



@Logger
export class Person {
    name: string;
    constructor(name: string) {
        console.log('creating person');

        this.name = name;
        console.log('this.name  :::->>>', this.name);
    }
}


/*
Decorator factory is a function that returns the expression that will be called by the decorator at runtime.
*/

@LoggerFactory("LOGGING - PERSON")
export class Person_2 {
    @logProp
    name: string;
    constructor(name: string) {
        console.log('creating person');

        this.name = name;
        console.log('this.name  :::->>>', this.name);
    }
}