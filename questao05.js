// Questão 5 - Exemplo prático de Closure

function criarSaudacao(saudacaoBase) {
  // A função interna 'lembra' do parâmetro 'saudacaoBase' (closure)
  return function (nome) {
    return `${saudacaoBase}, ${nome}!`;
  };
}

const dizerOla = criarSaudacao('Olá');
const dizerBomDia = criarSaudacao('Bom dia');

console.log(dizerOla('Jefferson'));    // Saída: Olá, Jefferson!
console.log(dizerBomDia('Jefferson')); // Saída: Bom dia, Jefferson!
