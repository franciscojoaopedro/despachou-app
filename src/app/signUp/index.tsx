import { ChangeEvent, useState } from "react";
import {} from 'react-native-image-picker';
import { Container,Input,Title,Button,ButtonPhoto,ButtonText} from "./style";
import { Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { api } from "../../api/api";
import axios from "axios";

export default function SignUp() {
  const [image, setImage] = useState<string>("");
  const [nome, setNome] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [tipo, setTipo] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
 
  const handlePhotoChange = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result)
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }else{
      setImage("")
    }
  };
  
  const formData=new FormData()
  formData.append("nome",nome);
  formData.append("telefone",telefone);
  formData.append("senha",senha);
  formData.append("tipo",tipo);
  formData.append("email",email);
  formData.append("image",{
    uri:image,
    type:"image/jpeg",
    name:"image.jpeg"
  });

  const handleRegisterUser=async()=>{
    

    console.log(formData)

    await axios.post("http://192.168.18.9:7788/v1/api/usuario/create",formData,{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response)=>{
      console.log(response.data)
    })
    .catch((error)=>{
      console.log({
        error
      })
    })

  }


  return (
    <Container>
      <Title>Registrar</Title>
      <ButtonPhoto onPress={handlePhotoChange}  >
      {image && <Image source={{uri:image}} style={{width: 150, height: 150,borderRadius: 50}} />}
      </ButtonPhoto>
      <Input placeholder="Nome"  value={nome} onChangeText={setNome}/>
      <Input placeholder="Telefone" value={telefone} onChangeText={setTelefone} />
      <Input placeholder="Tipo de conta" value={tipo} onChangeText={setTipo} />
      <Input placeholder="E-mail"value={email} onChangeText={setEmail} />
      <Input placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry />
      <Button onPress={handleRegisterUser}>
        <ButtonText>Registrar</ButtonText>
      </Button>
    </Container>
  );
}