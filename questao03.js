// Questão 3 - Função Callback

const numeros = [10, 20, 30];

// A função passada como parâmetro para o forEach é a função callback
numeros.forEach((numero, indice) => {
  console.log(`Índice ${indice}: ${numero}`);
});

// Saída esperada:
// Índice 0: 10
// Índice 1: 20
// Índice 2: 30
