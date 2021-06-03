'use strict';

const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;
let income = 'Additional income';
let addExpenses = prompt('List the possible expenses for the calculated period separated by commas', 'Internet, Games, Trainings');
let arrAddExpenses = addExpenses.toLowerCase().split(',');
let deposit = confirm('Do you have a bank deposit?');
let mission = 3500000;
let period = 12;
let expenses = [];
/*let expenses1 = prompt('Enter the required expense item', 'Rent payment');
let amount1 = +prompt('How much will it cost?','10000');
let expenses2 = prompt('Enter the required expense item', 'Car');
let amount2 = +prompt('How much will it cost?', '7500');*/
let accumulatedMonth;
let budgetDay;
let missionMonth;

const start = function () {

  do {
    money = prompt('Your monthly income?', '90000');
  }
  while (!isNumber(money));

};

start();

const showTypeOf = function (data) {
  console.log(data, typeof(data));
};
showTypeOf(deposit);

const getExpensesMonth = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    expenses[i] = prompt('Enter the required expense item');

    sum += +prompt('How much will it cost?');

    while (!isNumber(sum)) {
      sum = prompt('How much will it cost?');
    }

  }
  console.log(expenses);
  console.log(sum)
  return sum;
};

let expensesAmount = getExpensesMonth();

accumulatedMonth = 0;
const getAccumulatedMonth = function (a, b) {
  return accumulatedMonth = a - b;
};
getAccumulatedMonth(money, expensesAmount);

budgetDay = Math.floor(accumulatedMonth / 30);

const getTargetMonth = function (a, b) {
  if (Math.ceil(mission / accumulatedMonth) < 0) {
    return console.log("Target not achieved");
  } else {
    return Math.ceil(mission / accumulatedMonth);
  }
};

missionMonth = Math.ceil(mission / accumulatedMonth);

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

console.log(expensesAmount);
console.log(addExpenses);
console.log(budgetDay);
console.log(getTargetMonth(mission, accumulatedMonth));