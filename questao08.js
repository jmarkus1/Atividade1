// Questão 8 - Closures e instâncias independentes

function criarContador() {
  let contagem = 0; // Variável mantida no escopo léxico via closure
  return function contador() {
    contagem++;
    return contagem;
  };
}

const contadorA = criarContador();
console.log(contadorA()); // Saída: 1
console.log(contadorA()); // Saída: 2

const contadorB = criarContador();
console.log(contadorB()); // Saída: 1 (novo escopo isolado)
