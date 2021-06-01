'use strict';

let money = +prompt('Your monthly income?', '90000');
let income = 'Additional income';
let addExpenses = prompt('List the possible expenses for the calculated period separated by commas', 'Internet, Games, Trainings');
let arrAddExpenses = addExpenses.toLowerCase().split(',');
let deposit = confirm('Do you have a bank deposit?');
let mission = 3500000;
let period = 12;
let expenses1 = prompt('Enter the required expense item', 'Rent payment');
let amount1 = +prompt('How much will it cost?','10000');
let expenses2 = prompt('Enter the required expense item', 'Car');
let amount2 = +prompt('How much will it cost?', '7500');

const showTypeOf = function (data) {
  console.log(data, typeof(data));
};
showTypeOf(deposit);

let sumExpenses = 0;
const getExpensesMonth = function (a, b) {
  return sumExpenses = a + b;
};
console.log(getExpensesMonth(amount1, amount2));
console.log(addExpenses);

let accumulatedMonth = 0;
const getAccumulatedMonth = function (a, b) {
  return accumulatedMonth = a - b;

};
getAccumulatedMonth(money, sumExpenses);

let budgetDay = Math.floor(accumulatedMonth / 30);
console.log(budgetDay);

const getTargetMonth = function (a, b) {
  return Math.ceil(mission / accumulatedMonth);
};
console.log(getTargetMonth(mission, accumulatedMonth));

let missionMonth = Math.ceil(mission / accumulatedMonth);

const getStatusIncome = function () {
  if (budgetDay >= 1200) {
    console.log('You have a high level of income');
  } else if (budgetDay >= 600 && budgetDay < 1200 ) {
    console.log('You have an average income level');
  } else if (budgetDay >= 0 && budgetDay < 600) {
    console.log('Unfortunately you have a lower than average income');
  } else {
    console.log('Something went wrong');
  }
};
getStatusIncome();
