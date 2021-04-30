// type ConstructorFunction = new (...args: any[]) => any
// function ClassDecorator<T extends ConstructorFunction>(x:T){    
//constructor use gryo vne rest paramater rakhna prxa
//ya chai line 20 ko lai override gareko if already exist x vne otheriwse new property add gareko
//learn :https://www.logicbig.com/tutorials/misc/typescript/class-decorators.html
//     console.log(x)
//         return class extends x{
//         location='ktm';
//         name='ryan'
//     }
// } 
// function b(x:Function){
//     console.log(x)
//     // console.log(y)
// }
// function Factory(y:boolean){
//   return b
// }
//  @ClassDecorator
// class Person {
//     constructor(public name:string,public age:number){}
//     getName():number{
//         return this.age;
//     }
// }
// let p = new Person('jacob',23)
// console.log(p)
// @Factory(true)
// class B {
// }
