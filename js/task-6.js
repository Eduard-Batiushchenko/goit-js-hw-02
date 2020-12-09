let input;
const numbers = [];
let total = 0;

for (;;) {
  input = prompt('Ввести число');
  let number = Number(input);

  if (input === null) {
    for (let i = 0; i < numbers.length; i += 1) {
      total += numbers[i];
    }
    if (total === 0) {
      alert('Нет чисел для сложения, попробуйте еще раз!');
      continue;
    }
    console.log(`Общая сумма чисел равна ${total}`);
    break;
  }
  if (Number.isNaN(number) === false) {
    numbers.push(number);
  } else {
    alert('Было введено не число, попробуйте еще раз!');
  }
}
