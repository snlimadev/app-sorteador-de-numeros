import { useState, useCallback } from 'react';
import { View, ScrollView, Button, ImageBackground } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import { useFocusEffect } from '@react-navigation/native';

import styles from '../../../css/styles';
import imagemDeFundo from '../../../assets/imagemDeFundo.jpg';

const BANNER_ID = 'ca-app-pub-4878437225305198/6267369375';

export default function TelaInicial(props) {
  const [bannerVisivel, setBannerVisivel] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setBannerVisivel(true);

      return () => {
        setBannerVisivel(false);
      };
    }, [])
  );

  return (
    <ImageBackground style={{ flex: 1 }} resizeMode='repeat' source={imagemDeFundo}>
      <ScrollView contentContainerStyle={[styles.containerScrollView, { alignItems: 'center' }]}>

        <View style={styles.containerTelaInicial}>
          <View style={styles.espacoInferior}>
            <Button title='Personalizado' onPress={() => props.navigation.navigate('Personalizado')} />
          </View>

          <View style={styles.espacoInferior}>
            <Button title='Mega-Sena' onPress={() => props.navigation.navigate('Mega-Sena')} color='green' />
          </View>

          <View style={styles.espacoInferior}>
            <Button title='Lotofácil' onPress={() => props.navigation.navigate('Lotofácil')} color='purple' />
          </View>

          <View style={styles.espacoInferior}>
            <Button title='Quina' onPress={() => props.navigation.navigate('Quina')} color='darkblue' />
          </View>

          <View style={styles.espacoInferior}>
            <Button title='Lotomania' onPress={() => props.navigation.navigate('Lotomania')} color='darkorange' />
          </View>

          <View style={styles.espacoInferior}>
            <Button title='Timemania' onPress={() => props.navigation.navigate('Timemania')} color='yellowgreen' />
          </View>

          <View style={styles.espacoInferior}>
            <Button title='Dupla Sena' onPress={() => props.navigation.navigate('Dupla Sena')} color='darkred' />
          </View>

          <View>
            <Button title='Dia de Sorte' onPress={() => props.navigation.navigate('Dia de Sorte')} color='#CC9900' />
          </View>
        </View>

      </ScrollView>

      {(bannerVisivel) && (
        <BannerAd
          unitId={(__DEV__) ? TestIds.BANNER : BANNER_ID}
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true
          }}
        />
      )}
    </ImageBackground>
  );
}