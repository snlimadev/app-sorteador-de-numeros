//#region Função local que gera um número aleatório
function sortear(min, max) {
  return (
    Math.floor(Math.random() * (max - min + 1) + min)
  );
}
//#endregion

//#region Função chamada no evento onPress de cada tela, apenas alterando os parâmetros
export function sorteiaNumeros(qtdNumeros, numMin, numMax, setResultado) {
  const numeros = [];
  const numerosUnicos = [];
  let valorDuplicado = false;
  let resultado = '';

  if (Number.isSafeInteger(qtdNumeros) && Number.isSafeInteger(numMin) && Number.isSafeInteger(numMax)
      && (qtdNumeros > 0 && qtdNumeros <= 1000 && qtdNumeros < numMax - numMin + 1) && numMin < numMax) {

    for (let i = 0; i < qtdNumeros; i++) {
      numeros.push(sortear(numMin, numMax));
    }

    for (let x = 0; x < numeros.length; x++) {
      for (let y = 0; y < numerosUnicos.length; y++) {
        if (numeros[x] === numerosUnicos[y]) {
          valorDuplicado = true;
        }
      }

      if (!valorDuplicado) {
        numerosUnicos.push(numeros[x]);
      } else {
        numeros.push(sortear(numMin, numMax));
      }

      valorDuplicado = false;
    }

    resultado = 'Números sorteados:\n\n' + String(numerosUnicos.sort((a, b) => a - b).join(', '));

  } else {
    resultado = 'Não foi possível sortear. Instruções:\n\n' +
                'a) É obrigatório informar a quantidade de números e o intervalo;\n' +
                'b) Todos os valores devem ser números inteiros;\n' +
                'c) A quantidade de números deve ser no máximo 1000;\n' +
                'd) O tamanho do intervalo deve ser maior que a quantidade de números;\n' +
                'e) O valor mínimo do intervalo deve ser menor que o valor máximo.';
  }

  setResultado(resultado);
}
//#endregion
