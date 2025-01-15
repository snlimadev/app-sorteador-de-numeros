import { View, ScrollView, Text, Button, ImageBackground } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

import styles from '../css/styles';
import imagemDeFundo from '../assets/imagemDeFundo.jpg';
import BotaoCompartilhar from './BotaoCompartilhar';

const BANNER_ID = 'ca-app-pub-4878437225305198/7070720128';

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

      <BannerAd
        unitId={(__DEV__) ? TestIds.BANNER : BANNER_ID}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true
        }}
      />

    </ImageBackground>
  );
}