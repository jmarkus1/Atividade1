// Questão 1 - Function Declaration e Function Expression

// 1. Function Declaration (sofre hoisting completo)
function somar(a, b) {
  return a + b;
}

// 2. Function Expression (atribuída a uma variável/constante)
const subtrair = function (a, b) {
  return a - b;
};

// Execuções e testes
console.log('Soma (Declaration):', somar(10, 5));        // Saída: 15
console.log('Subtração (Expression):', subtrair(10, 5)); // Saída: 5
