import { Link,router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, Container, Input, Title,ButtonText } from './style';
import { useEffect, useState,useContext} from 'react';
import AsyncStorage  from "@react-native-async-storage/async-storage"
import { api } from '../../api/api';
import { UserContext, UserProvider } from '../../contexts/AppContext';
import { UserContextValueProps } from '../../interfaces/interfaces';

export default function SignIn() {
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const {user,login,logout}=useContext<UserContextValueProps>(UserContext)

  const handleLogin = async () => {
    login({email,senha})
    
    // Salvar o token no AsyncStorage ou em algum outro lugar seguro
  }
  useEffect(()=>{ 
    async    function verficarSeUsuarioLogado(){
      const usuarioLogado=await AsyncStorage.getItem("despachou-token")
     
      const format= await JSON.parse(usuarioLogado)
      console.log(format)  
      if(usuarioLogado){
          console.log({
            message:"Usuario logado",
            usuarioLogado
          })
          router.replace("/(tabs)/home/")
        }
        else{
          console.log("não existe token")
        }
    }
    verficarSeUsuarioLogado()
  },[])
  
  return (
   
    <Container>
    <Title>Entrar</Title>
    <Input placeholder="E-mail"  value={email} onChangeText={setEmail} />
    <Input placeholder="Senha" secureTextEntry  value={senha} onChangeText={setSenha}/>
    <Button onPress={handleLogin}>
      <ButtonText>Entrar</ButtonText>
    </Button>
    <Link href={"/signUp/"}>Não tenho uma conta</Link>
  </Container>
    
  );
}

