function add(number1, number2) {
  return number1 + number2;
}

function subtraction(number1, number2) {
  return number1 - number2;
}

function multiplication(number1, number2) {
  return number1 * number2;
}

function division(number1, number2) {
  if (number2 === 0) {
    return `The operation cannot be executed because number2 is equals to ${number2}!`;
  } else {
    return number1 / number2;
  }
}
