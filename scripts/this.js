
function Person(yourName, yourTankType){
    this.name = yourName;
    this.tankType = yourTankType;
}

var kendell = new Person('Kendell', 'Warrior');
var zach = new Person('Zach', 'Scout');

console.log(kendell.name);
console.log(kendell.tankType);
console.log(zach.name);
console.log(zach.tankType);