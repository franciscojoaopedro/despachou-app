import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Container,Avatar,Card,Content,Paragraph,Title } from '../(tabs)/profile/style';

export default function Perfil() {

  return (
    <Container>
    <Card>
      <Avatar source={{ uri: 'https://picsum.photos/700' }} />
      <Content>
        <Title>Nome do Usuário</Title>
        <Paragraph>Email: user@example.com</Paragraph>
        <Paragraph>Telefone: (123) 456-7890</Paragraph>
        <Paragraph>Tipo: Proprietário</Paragraph>
      </Content>
    </Card>
  </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
