import { View, ScrollView, Button, ImageBackground } from 'react-native';

import styles from '../../../css/styles';
import imagemDeFundo from '../../../assets/imagemDeFundo.jpg';

export default function TelaInicial(props) {
  return (
    <ImageBackground style={styles.container} resizeMode='repeat' source={imagemDeFundo}>
      <ScrollView contentContainerStyle={styles.containerScrollView}>

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

      </ScrollView>
    </ImageBackground>
  );
}