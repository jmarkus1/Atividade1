// Questão 9 - Conta Bancária com encapsulamento via Closures

function criarContaBancaria(saldoInicial = 0) {
  // Variável privada (não acessível diretamente de fora)
  let saldo = saldoInicial;

  return {
    depositar(valor) {
      if (valor > 0) {
        saldo += valor;
        return `Depósito de R$ ${valor.toFixed(2)} realizado com sucesso.`;
      }
      return 'Valor de depósito inválido.';
    },
    sacar(valor) {
      if (valor > 0 && valor <= saldo) {
        saldo -= valor;
        return `Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`;
      }
      return 'Saldo insuficiente ou valor de saque inválido.';
    },
    consultarSaldo() {
      return `Saldo atual: R$ ${saldo.toFixed(2)}`;
    }
  };
}

// Testes e execuções:
const minhaConta = criarContaBancaria(100);

console.log(minhaConta.saldo);             // Saída: undefined (privado)
console.log(minhaConta.consultarSaldo());   // Saída: Saldo atual: R$ 100.00
console.log(minhaConta.depositar(50));     // Saída: Depósito de R$ 50.00 realizado com sucesso.
console.log(minhaConta.consultarSaldo());   // Saída: Saldo atual: R$ 150.00
console.log(minhaConta.sacar(30));         // Saída: Saque de R$ 30.00 realizado com sucesso.
console.log(minhaConta.consultarSaldo());   // Saída: Saldo atual: R$ 120.00
