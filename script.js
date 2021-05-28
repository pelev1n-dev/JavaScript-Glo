let money = 90000;
let income = 'Additional income';
let addExpenses = 'Internet, Games, Trainings';
let arrAddExpenses = addExpenses.toLowerCase().split(',');
let deposit = true;
let mission = 30000;
let period = 12;
let budgetDay = money / 30

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log(`The period is ${period} months`);
console.log(`The target to earn ${mission} euros`);
console.log(arrAddExpenses);
console.log(budgetDay);