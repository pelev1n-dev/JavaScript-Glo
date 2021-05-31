'use strict';

let money = +prompt('Your monthly income?', '90000');
console.log(typeof money);

let income = 'Additional income';

let addExpenses = prompt('List the possible expenses for the calculated period separated by commas', 'Internet, Games, Trainings');
console.log(typeof addExpenses);
console.log(addExpenses.length);
console.log(addExpenses);

let arrAddExpenses = addExpenses.toLowerCase().split(',');
console.log(arrAddExpenses);

let deposit = !!prompt('Do you have a bank deposit?', 'true');
console.log(typeof deposit);

let expenses1 = prompt('Enter the required expense item', 'Rent payment');
let amount1 = +prompt('How much will it cost?','10000');
let expenses2 = prompt('Enter the required expense item', 'Car');
let amount2 = +prompt('How much will it cost?', '7500');

let budgetMonth = money - (amount1 + amount2);
console.log(budgetMonth);

let mission = 3500000;
console.log(`The target to earn ${mission} rubles`);

let missionMonth = Math.ceil(mission / budgetMonth);
console.log(`The target will be achieved in ${missionMonth} months`);

let period = 12;
console.log(`The period is ${period} months`);

let budgetDay = Math.floor(budgetMonth / 30);
console.log(budgetDay);

if (budgetDay >= 1200) {
  console.log('You have a high level of income');
} else if (budgetDay >= 600 && budgetDay < 1200 ) {
  console.log('You have an average income level');
} else if (budgetDay >= 0 && budgetDay < 600) {
  console.log('Unfortunately you have a lower than average income');
} else {
  console.log('Something went wrong');
}