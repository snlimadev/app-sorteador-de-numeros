import { useState } from 'react';

import BoxSorteio from '../BoxSorteio';
import { sorteiaNumeros } from '../Funcoes';

export default function DiaDeSorte() {
  const [valorSelecionado, setValorSelecionado] = useState();
  const [resultado, setResultado] = useState('');

  //#region Define os valores do drop down / key = valor, value = texto exibido na tela
  const listaDeValores = [
    { key: 7, value: '7' },
    { key: 8, value: '8' },
    { key: 9, value: '9' },
    { key: 10, value: '10' },
    { key: 11, value: '11' },
    { key: 12, value: '12' },
    { key: 13, value: '13' },
    { key: 14, value: '14' },
    { key: 15, value: '15' }
  ];
  //#endregion

  return (
    <BoxSorteio
      setValorSelecionado={setValorSelecionado}
      listaDeValores={listaDeValores}
      valorPadrao={{ key: 7, value: '7' }}
      botaoSortear={() => { sorteiaNumeros(valorSelecionado, 1, 31, setResultado) }}
      resultado={resultado}
    />
  );
}