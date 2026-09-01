// Questão 6 - Correção de erro de inicialização (Temporal Dead Zone)

// Código corrigido: a arrow function deve ser declarada e inicializada antes da chamada
const multiplicar = (a, b) => a * b;

console.log('Resultado da multiplicação:', multiplicar(2, 3)); // Saída: 6
