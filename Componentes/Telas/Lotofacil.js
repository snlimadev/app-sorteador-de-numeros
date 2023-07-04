import { useState } from 'react';

import BoxSorteio from '../BoxSorteio';
import { sorteiaNumeros } from '../Funcoes';

export default function Lotofacil() {
  const [valorSelecionado, setValorSelecionado] = useState();
  const [resultado, setResultado] = useState('');

  //#region Define os valores do drop down / key = valor, value = texto exibido na tela
  const listaDeValores = [
    { key: 15, value: '15' },
    { key: 16, value: '16' },
    { key: 17, value: '17' },
    { key: 18, value: '18' },
    { key: 19, value: '19' },
    { key: 20, value: '20' }
  ];
  //#endregion

  return (
    <BoxSorteio
      setValorSelecionado={setValorSelecionado}
      listaDeValores={listaDeValores}
      valorPadrao={{ key: 15, value: '15' }}
      botaoSortear={() => { sorteiaNumeros(valorSelecionado, 1, 25, setResultado) }}
      resultado={resultado}
    />
  );
}