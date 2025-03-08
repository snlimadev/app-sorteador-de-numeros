import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaInicial from './Componentes/Telas/TelaInicial';
import Personalizado from './Componentes/Telas/Personalizado';
import MegaSena from './Componentes/Telas/MegaSena';
import Lotofacil from './Componentes/Telas/Lotofacil';
import Quina from './Componentes/Telas/Quina';
import Lotomania from './Componentes/Telas/Lotomania';
import Timemania from './Componentes/Telas/Timemania';
import DuplaSena from './Componentes/Telas/DuplaSena';
import DiaDeSorte from './Componentes/Telas/DiaDeSorte';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='dark' />

      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: 'lightgreen' },
          headerTitleStyle: { fontWeight: 'bold' }
        }}
      >
        <Stack.Screen name="Escolha o tipo de sorteio" component={TelaInicial} />
        <Stack.Screen name="Personalizado" component={Personalizado} />
        <Stack.Screen name="Mega-Sena" component={MegaSena} />
        <Stack.Screen name="Lotofácil" component={Lotofacil} />
        <Stack.Screen name="Quina" component={Quina} />
        <Stack.Screen name="Lotomania" component={Lotomania} />
        <Stack.Screen name="Timemania" component={Timemania} />
        <Stack.Screen name="Dupla Sena" component={DuplaSena} />
        <Stack.Screen name="Dia de Sorte" component={DiaDeSorte} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}