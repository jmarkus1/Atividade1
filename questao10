// Questão 10 - Correção do problema com setTimeout e escopo

console.log('Abordagem 1: Usando let (Escopo de Bloco)');
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(`[let] Valor de i: ${i}`);
  }, i * 1000);
}

// Aguarda as impressões da primeira abordagem antes de rodar a segunda
setTimeout(() => {
  console.log('Abordagem 2: Usando Closure explicitamente (IIFE)');
  for (var j = 0; j < 5; j++) {
    (function (indiceCapturado) {
      setTimeout(function () {
        console.log(`[closure IIFE] Valor: ${indiceCapturado}`);
      }, indiceCapturado * 1000);
    })(j);
  }
}, 6000);
