"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function ClassDecorator(x) {
    return class extends x {
        constructor() {
            super(...arguments);
            this.location = 'ktm';
            this.name = 'ryan';
        }
    };
}
let Person = /** @class */ (() => {
    let Person = class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        getName() {
            return this.age;
        }
    };
    Person = __decorate([
        ClassDecorator
    ], Person);
    return Person;
})();
let p = new Person('jacob', 23);
console.log(p);
