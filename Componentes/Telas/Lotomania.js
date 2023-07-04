import { useState } from 'react';

import BoxSorteio from '../BoxSorteio';
import { sorteiaNumeros } from '../Funcoes';

export default function Lotomania() {
  const [valorSelecionado, setValorSelecionado] = useState();
  const [resultado, setResultado] = useState('');

  //#region Define os valores do drop down / key = valor, value = texto exibido na tela
  const listaDeValores = [
    { key: 50, value: '50' }
  ];
  //#endregion

  return (
    <BoxSorteio
      setValorSelecionado={setValorSelecionado}
      listaDeValores={listaDeValores}
      valorPadrao={{ key: 50, value: '50' }}
      botaoSortear={() => { sorteiaNumeros(valorSelecionado, 1, 100, setResultado) }}
      resultado={resultado}
    />
  );
}