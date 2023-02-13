const dataJulia = [
  [3, 5, 2, 12, 7],
  [9, 16, 6, 8, 3],
];
const dataKate = [
  [4, 1, 15, 8, 3],
  [10, 5, 6, 1, 4],
];

const checkDogs = (dogsJulia, dogsKate) => {
  const dogsOnlyJulia = dogsJulia.slice(1, -2);

  const dogsAgeAll = dogsOnlyJulia.concat(dogsKate);

  dogsAgeAll.forEach((age, idx) => (age < 3 ? console.log(`Dog number ${idx + 1} is still a puppy 🐶`) : console.log(`Dog number ${idx + 1} is an adult, and is ${age} years old`)));
};

checkDogs(dataJulia[0], dataKate[0]);
console.log("\n");
checkDogs(dataJulia[1], dataKate[1]);
