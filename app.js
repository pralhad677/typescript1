"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Factory(x) {
    //target:any ---if method is static it point to constructor function ,if instance points to prototype of Constructor function(class) 
    return (target, propName, descriptor) => {
        //here descriptor in js descriptor having configurable enumerable value writable depends on type of descriptor 
        console.log(descriptor);
        descriptor.writable = x;
    };
}
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
__decorate([
    Factory(false)
], Person.prototype, "getName", null);
let p = new Person('jacob');
p.getName = function () {
    console.log('hurray');
    return 'hurray';
};
console.log(p.getName); //update hudaina --app.js:28 Uncaught TypeError: Cannot assign to read only property 'getName' of object '#<Person>'
//method chai default way  writable ho 
//hamile chai writable lai false grna lako
