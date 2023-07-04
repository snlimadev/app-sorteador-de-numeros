import { View, ScrollView, Text, Button, ImageBackground } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

import styles from '../css/styles';
import imagemDeFundo from '../assets/imagemDeFundo.jpg';
import BotaoCompartilhar from './BotaoCompartilhar';

export default function BoxSorteio(props) {
  const exibeBotaoCompartilhar = (props.resultado !== '' && !props.resultado.startsWith('Não foi possível sortear')) ? <BotaoCompartilhar mensagem={props.resultado} /> : <></>

  return (
    <ImageBackground style={styles.container} resizeMode='repeat' source={imagemDeFundo}>

      <ScrollView contentContainerStyle={styles.containerScrollView}>
        <View style={styles.conteudo}>

          <View style={styles.exibirEmLinha}>
            <Text style={styles.textoDestacado}>Quantos números?</Text>

            <SelectList
              setSelected={props.setValorSelecionado}
              data={props.listaDeValores}
              defaultOption={props.valorPadrao}
              save='key'
              search={false}
              maxHeight={250}
              boxStyles={{ backgroundColor: 'white' }}
              dropdownStyles={{ backgroundColor: 'white' }}
            />
          </View>

          <View style={styles.boxBotao}>
            <Button title='Sortear' onPress={props.botaoSortear} color='green' />
          </View>

          <Text selectable={true} style={styles.textoResultado}>{props.resultado}</Text>

          <View style={styles.boxBotaoCompartilhar}>
            {exibeBotaoCompartilhar}
          </View>

        </View>
      </ScrollView>

    </ImageBackground>
  );
}