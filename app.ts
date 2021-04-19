
type ConstructorFunction = new (...args: any[]) => any

function ClassDecorator<T extends ConstructorFunction>(x:T){
    return class extends x{
        constructor(...rest:any[]){
            super()
            console.log(rest)
        }
    }
} 
 @ClassDecorator
class Person {
    constructor(public name:string,public age:number){}

    getName():number{
        return this.age;
    }
}
let p = new Person('jacob',23)