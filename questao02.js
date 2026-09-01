// Questão 2 - Reescrevendo function expression tradicional para Arrow Function

// Exemplo original:
// const soma = function(a, b) {
//   return a + b;
// };

// Reescrita como Arrow Function (com retorno implícito):
const soma = (a, b) => a + b;

// Execução e teste
console.log('Soma via Arrow Function:', soma(7, 3)); // Saída: 10
