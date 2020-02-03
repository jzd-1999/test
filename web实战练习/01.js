// function Egperson (name,age){
//     this.name = name;
//     this.age =age;
    
//     this.sayName = function(){
//         console.log(this.name);
//     }
// }
// var person = new Egperson('张三',18);
// person.sayName();

function egPerson (name,age){
    this.name = name;
    this.age = age;
    this.sayName = function(){
        console.log(this.name);
    }
}
var person = new egPerson('马克',23)
person.sayName();