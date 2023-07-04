import { Share, Button } from 'react-native';

export default function BotaoCompartilhar(props) {
  const compartilhar = async () => {
    try {
      await Share.share({
        message: props.mensagem
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Button onPress={compartilhar} title='Compartilhar' />
    </>
  );
}