"use strict";
// function Factory(x:boolean){
//   //target:any ---if method is static it point to constructor function ,if instance points to prototype of Constructor function(class) 
//   return (target:any,propName:string| symbol,descriptor:PropertyDescriptor)=>{
//     //here descriptor in js descriptor having configurable enumerable value writable depends on type of descriptor 
//     console.log(descriptor)
//     descriptor.writable = x
//   }
// }
// class Person {
//   constructor(public name:string){}
//   @Factory(false)
//    getName(){
//     return this.name
//   }
// }
// let p:Person = new Person('jacob');
// p.getName = function (){
//   console.log('hurray')
//   return 'hurray'
// }
// console.log(p.getName) //update hudaina --app.js:28 Uncaught TypeError: Cannot assign to read only property 'getName' of object '#<Person>'
// //method chai default way  writable ho 
// //hamile chai writable lai false grna lako
