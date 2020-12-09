const checkForSpam = function (message) {
  message = message.toLowerCase();
  const result =
    message.includes('spam') || message.includes('sale') ? 'true' : 'false';
  return result;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?'));
