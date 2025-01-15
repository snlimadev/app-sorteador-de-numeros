import { useState } from 'react';
import { View, ScrollView, Text, Button, TextInput, ImageBackground, Keyboard } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

import styles from '../../css/styles';
import imagemDeFundo from '../../assets/imagemDeFundo.jpg';
import { sorteiaNumeros } from '../Funcoes';
import BotaoCompartilhar from '../BotaoCompartilhar';

const BANNER_ID = 'ca-app-pub-4878437225305198/5754571359';

export default function Personalizado() {
  const [inputEmFoco, setInputEmFoco] = useState('');
  const [qtdNumeros, setQtdNumeros] = useState(10);
  const [numMin, setNumMin] = useState(1);
  const [numMax, setNumMax] = useState(100);
  const [resultado, setResultado] = useState('');
  const exibeBotaoCompartilhar = (resultado !== '' && !resultado.startsWith('Não foi possível sortear')) ? <BotaoCompartilhar mensagem={resultado} /> : <></>

  return (
    <ImageBackground style={styles.container} resizeMode='repeat' source={imagemDeFundo}>

      <ScrollView contentContainerStyle={styles.containerScrollView} keyboardShouldPersistTaps='handled'>
        <View style={styles.conteudo}>

          <View style={styles.espacoInferior}>
            <Text style={styles.textoDestacado}>Quantos números (máx. 1000)?</Text>

            <View style={styles.espacoSuperior}>
              <TextInput
                textAlign='center'
                keyboardType='number-pad'
                maxLength={4}
                value={qtdNumeros.toString()}
                onChangeText={setQtdNumeros}
                style={[styles.campoDeTexto, (inputEmFoco === 'inputQtdNumeros') ? styles.campoDeTextoEmFoco : styles.campoDeTextoNormal]}
                onFocus={() => setInputEmFoco('inputQtdNumeros')}
                onBlur={() => setInputEmFoco('')}
                autoFocus={true}
              />
            </View>
          </View>

          <View>
            <Text style={styles.textoDestacado}>Qual é o intervalo?</Text>
          </View>

          <View style={[styles.exibirEmLinha, styles.espacoSuperior]}>
            <Text style={styles.textoDestacado}>De:</Text>

            <TextInput
              textAlign='center'
              keyboardType='number-pad'
              maxLength={15}
              value={numMin.toString()}
              onChangeText={setNumMin}
              style={[styles.campoDeTexto, (inputEmFoco === 'inputNumMin') ? styles.campoDeTextoEmFoco : styles.campoDeTextoNormal]}
              onFocus={() => setInputEmFoco('inputNumMin')}
              onBlur={() => setInputEmFoco('')}
            />

            <Text style={[styles.textoDestacado, styles.espacoEsquerdo]}>Até:</Text>

            <TextInput
              textAlign='center'
              keyboardType='number-pad'
              maxLength={15}
              value={numMax.toString()}
              onChangeText={setNumMax}
              style={[styles.campoDeTexto, (inputEmFoco === 'inputNumMax') ? styles.campoDeTextoEmFoco : styles.campoDeTextoNormal]}
              onFocus={() => setInputEmFoco('inputNumMax')}
              onBlur={() => setInputEmFoco('')}
            />
          </View>

          <View style={styles.boxBotao}>
            <Button
              title='Sortear'
              onPress={() => { sorteiaNumeros(Number(qtdNumeros), Number(numMin), Number(numMax), setResultado), Keyboard.dismiss() }} color='green'
            />
          </View>

          <Text selectable={true} style={styles.textoResultado}>{resultado}</Text>

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