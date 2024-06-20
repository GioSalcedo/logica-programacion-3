const inputNumber = document.getElementById("input-number");
const btnSubmit = document.getElementById("btn-submit");
const resultElement = document.getElementById("result");

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  const number = parseInt(inputNumber.value, 10);
  const result = generateFactorialSteps(number);
  resultElement.innerHTML = result;
});

function generateFactorialSteps(number) {
  if (isNaN(number) || number === '') return "Ingrese un número válido.";
  if (number < 0) return "Ingrese un número no negativo.";
  let result = '';
  let factorialValue = 1;
  for (let i = 1; i <= number; i++) {
    factorialValue *= i;
  }
  result += `${number}! = `;
  for (let i = number; i > 1; i--) {
    result += `${i} * `;
  }
  result += `1 = ${factorialValue}\n`;
  return result;
}