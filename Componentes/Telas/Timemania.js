import { useState } from 'react';

import BoxSorteio from '../BoxSorteio';
import { sorteiaNumeros } from '../Funcoes';

export default function Timemania() {
  const [valorSelecionado, setValorSelecionado] = useState();
  const [resultado, setResultado] = useState('');

  //#region Define os valores do drop down / key = valor, value = texto exibido na tela
  const listaDeValores = [
    { key: 10, value: '10' }
  ];
  //#endregion

  return (
    <BoxSorteio
      setValorSelecionado={setValorSelecionado}
      listaDeValores={listaDeValores}
      valorPadrao={{ key: 10, value: '10' }}
      botaoSortear={() => { sorteiaNumeros(valorSelecionado, 1, 80, setResultado) }}
      resultado={resultado}
    />
  );
}