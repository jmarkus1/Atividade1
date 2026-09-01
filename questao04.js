// Questão 4 - Análise de Hoisting com Function Declaration

console.log(saudacao()); // Saída: "Olá, turma!"

function saudacao() {
  return 'Olá, turma!';
}

// Justificativa: A declaração é içada (hoisting) por completo com seu corpo
// antes do tempo de execução, permitindo a chamada prévia.
