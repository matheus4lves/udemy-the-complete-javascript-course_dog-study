const dataJulia = [
  [3, 5, 2, 12, 7],
  [9, 16, 6, 8, 3],
];
const dataKate = [
  [4, 1, 15, 8, 3],
  [10, 5, 6, 1, 4],
];

const checkDogs = (dogsJulia, dogsKate) => {
  const dogsOnlyJulia = dogsJulia.filter((_, idx, arr) => {
    const size = arr.length;
    return idx > 0 && idx < size - 2;
  });

  console.log(dogsOnlyJulia);
};

checkDogs(dataJulia[0], dataKate[0]);
checkDogs(dataJulia[1], dataKate[1]);
