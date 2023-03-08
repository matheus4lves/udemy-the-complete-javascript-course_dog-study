const dataJulia = [
  [3, 5, 2, 12, 7],
  [9, 16, 6, 8, 3],
];
const dataKate = [
  [4, 1, 15, 8, 3],
  [10, 5, 6, 1, 4],
];

const dogsAges = [
  [5, 2, 4, 1, 15, 8, 3],
  [16, 6, 10, 5, 6, 1, 4],
];

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

const checkDogs = (dogsJulia, dogsKate) => {
  const dogsOnlyJulia = dogsJulia.slice(1, -2);

  const dogsAgeAll = dogsOnlyJulia.concat(dogsKate);

  dogsAgeAll.forEach((age, idx) => (age < 3 ? console.log(`Dog number ${idx + 1} is still a puppy 🐶`) : console.log(`Dog number ${idx + 1} is an adult, and is ${age} years old`)));
};

const calcAverageHumanAge = ages => {
  const humanAges = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4)).filter(age => age >= 18);
  return humanAges.reduce((acc, age) => acc + age, 0) / humanAges.length;
};

// checkDogs(dataJulia[0], dataKate[0]);
// console.log("\n");
// checkDogs(dataJulia[1], dataKate[1]);

console.log(calcAverageHumanAge(dogsAges[0]));
console.log(calcAverageHumanAge(dogsAges[1]));

// Coding challenge 4
// Task 1: Calculate the recommended food.
dogs.forEach(dog => {
  dog.recommendedFood = dog.weight ** 0.75 * 28;
});

// Task 2: Find the obj that contains Sarah in the owners array.
const { curFood, recommendedFood } = dogs.find(dog => dog.owners.includes("Sarah"));
console.log(curFood > recommendedFood ? "Sarah's dog is eating too much" : "Sarah's dog is eating too little");

// Task 3: Create two arrays of owners
let ownersEatTooLittle = [];
let ownersEatTooMuch = [];

dogs.forEach(dog => (dog.curFood < dog.recommendedFood ? ownersEatTooLittle.push(...dog.owners) : ownersEatTooMuch.push(...dog.owners)));

// Task 4: Log the arrays from the previous task
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);

// Task 5: Check if there's a dog who eats the correct amount of food
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));
