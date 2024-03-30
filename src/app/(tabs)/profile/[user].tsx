import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Container,Avatar,Card,Content,Paragraph,Title 
,ContainerHeader,LogoutButton,LogoutText
} from "./style";
import {useLocalSearchParams} from "expo-router"
import { useContext, useEffect, useState } from 'react';
import { api } from '../../../api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContextValueProps } from '../../../interfaces/interfaces';
import { UserContext } from '../../../contexts/AppContext';

interface usuarioProps{
  nome:string
  email:string
  telefone:string,
  tipo:string
  avatar:string
}
export default function Profile(){
    const [usuario,setUsuario]=useState<usuarioProps>({})
    const {logout} =useContext<UserContextValueProps>(UserContext)
    

    useEffect(()=>{
      async function buscarUsuario(){
        const token=await AsyncStorage.getItem("despachou-token")
        const usuario_id= await JSON.parse(token)
       await api.get(`/usuario/one/${usuario_id._id}`)
       .then((response)=>{
        console.log(response.data.usuario)
        setUsuario(response.data.usuario)
       })
      }
      buscarUsuario()
    },[])

    const handleLogOut=async()=>{
      logout()
    }
  return (
    <Container>
      <ContainerHeader>
      <Title>{usuario.nome}</Title>
      <Avatar source={{ uri: usuario.avatar }} />
      </ContainerHeader>
    <Card>
      <Content>
        <Paragraph>Email: {usuario.email}</Paragraph>
        <Paragraph>Telefone: (+244) {usuario.telefone}</Paragraph>
        <Paragraph>Tipo: {usuario.tipo}</Paragraph>
      </Content>
    </Card>
    <LogoutButton onPress={handleLogOut}>
      <LogoutText>Encerrar</LogoutText>
    </LogoutButton>
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
