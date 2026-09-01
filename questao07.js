// Questão 7 - Implementação do meuForEach

function meuForEach(array, callback) {
  // Itera sobre todos os elementos do array
  for (let i = 0; i < array.length; i++) {
    // Executa o callback passando (elemento, índice, array original)
    callback(array[i], i, array);
  }
}

// Teste da função
const linguagens = ['JavaScript', 'Java', 'Python'];

meuForEach(linguagens, (item, index) => {
  console.log(`Posição ${index} -> ${item}`);
});

// Saída esperada:
// Posição 0 -> JavaScript
// Posição 1 -> Java
// Posição 2 -> Python
