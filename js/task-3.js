const findBestEmployee = function (employees) {
  let key = Object.entries(employees);
  let maxValue = key[0];
  for (let i = 1; i < key.length; i += 1) {
    if (maxValue < key[i]) {
      maxValue = key[i];
    }
  }
  return `${maxValue[0]}: ${maxValue[1]}`;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
