'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Charlie Kaylor',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// loop over movements array inside of account objects - add the dynamic HTML to the movements div
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  // clears all of the HTML inside movements div instead of; .textContent = 0

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
    // first param - where I want the html
    // second param - what I want to insert into the html
  });
};
displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// ARRAY METHODS //

// SLICE
// let arr = [`a`, `b`, `c`, `d`, `e`];
// console.log(arr.slice(2)); // does not mutate original arr array - simply creates a copy of arr with the extracted parts
// console.log(arr.slice(2, 4)); // first parameter is where the first index is, the second is where the last index will be - end parameter not included in the output
// console.log(arr.slice(-2)); // negative starts at the end; -2 would take the last two elements
// console.log(arr.slice(1, -2)); // starts extracting at position 1, and extracts everything except the last two elements
// console.log(arr.slice()); // creates a shallow copy of the entire array, can do the same thing with the spread operator;
// console.log([...arr]); // same result as above

// // SPLICE
// // Does change the original array unlike slice
// // console.log(arr.splice(2));
// arr.splice(-1); // removes last element
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr); // extracted elements from splice gone from the original array
// // most of the time the value the splice method returns doesn't interest us - all we are usually interested in is to delete one or more elements from the array using splice - one common use case is to remove the last element from the array
// // second parameter is delete count, how many elements you wish to delete

// // REVERSE
// arr = [`a`, `b`, `c`, `d`, `e`];
// let arr2 = [`j`, `i`, `h`, `g`, `f`];
// console.log(arr2.reverse()); // reverse mutates the original array
// console.log(arr2);

// // CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// // brings together two arrays
// console.log([...arr, ...arr2]);
// // could also do this - same result and both do not mutate

// // JOIN
// console.log(letters.join(' - '));
// string with letters specified

//forEACH

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log(`--------forEach--------`);
// // How to achieve same thing with forEach
// // receives current element of the array as an argument - named movement below
// movements.forEach(function (mov, i, arr) {
//   // first parameter needs to be current element
//   // second the current index
//   // third the entire array we're looping over
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

// how forEach works
// 0: function(200)
// 1: function(450)
// 2: function(400)
// in each iteration we tell forEach what it should be doing - loggin a particular string to the console in this case

// one difference between the two loops - cannot break out of a forEach loop
// continue and break statements don't work at all in forEach
// will always loop over the entire array

// MAP
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // SET
// const currenciesUnique = new Set([`USD`, `GBP`, `USD`, `EUR`]);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, set) {
//   console.log(`${value}: ${_}`);
// });
// second paramater for forEach is the same as the first - as sets don't have keys

// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

//SOLUTION 1
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// console.log([...dogsJulia]);

// const checkDogs = function () {
//   dogsJulia.splice(0, 1);
//   dogsJulia.splice(-2);
//   const bothDogs = [...dogsJulia, ...dogsKate];
//   bothDogs.forEach(function (value, i) {
//     console.log(
//       `Dog number ${i + 1} is an ${
//         value > 2 ? 'adult' : 'puppy'
//       }, and is ${value} years old.`
//     );
//   });
// };
// checkDogs();

//SOLUTION 2
// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);
//   // dogsJulia.slice(1, 3);
//   const dogs = dogsJuliaCorrected.concat(dogsKate);
//   console.log(dogs);
//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     }
//   });
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
