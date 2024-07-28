import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerScrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },

  containerTelaInicial: {
    width: '90%',
    paddingHorizontal: 20,
  },

  espacoInferior: {
    paddingBottom: 20,
  },

  conteudo: {
    alignItems: 'center',
    backgroundColor: 'lightgreen',
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10,
    padding: 10,
    borderRadius: 20,
  },

  exibirEmLinha: {
    flexDirection: 'row',
  },

  textoDestacado: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingRight: 10,
  },

  boxBotao: {
    width: 150,
    paddingVertical: 20,
  },

  textoResultado: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 10,
  },

  boxBotaoCompartilhar: {
    width: 150,
    paddingTop: 20,
  },

  //#region Estilos usados apenas na tela Personalizado
  campoDeTexto: {
    borderRadius: 5,
    width: 100,
    backgroundColor: 'white',
  },

    campoDeTextoNormal: {
      borderWidth: 1,
      borderColor: 'gray',
    },

    campoDeTextoEmFoco: {
      borderWidth: 3,
      borderColor: 'black',
    },

  espacoSuperior: {
    paddingTop: 10,
    alignItems: 'center',
  },

  espacoEsquerdo: {
    paddingLeft: 10,
  },
  //#endregion

});

export default styles;