import { Link ,useNavigation,Navigator, router} from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { FlatList, StyleSheet, Text, View ,Dimensions, Image} from 'react-native';
import { Container,
  FeaturedTitle,
  Greeting,
  Header,
  Location,
  PropertyCard,
  PropertyImage,
  PropertyList,
  PropertyLocation,
  PropertyPrice,
  PropertyTitle,
  SearchBar,
  StyledFlatList
  
  } from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../../../api/api';
import { ImovelProps } from '../../../interfaces/interfaces';
  

const IMAGE="./assets/casa.jpg"
export default function HomeImove() {
  const [properties,setProperties]=useState<[ImovelProps]>()
  const signin=false
  const navi=useNavigation()


  const carregarImoveis = useCallback( async() => {
    // Coloque o código para carregar os imóveis aqui
      await api.get("/imovel/listar")
      .then(async(response)=>{
         const imoveis=await response.data.imoveis
         setProperties(imoveis)
      })
      .catch((error)=>{
       console.log(error)
      })
      

  }, [properties]);

  useEffect(()=>{ 
    async    function verficarSeUsuarioLogado(){
      const usuarioLogado=await AsyncStorage.getItem("despachou-token")
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

   carregarImoveis()
    
  },[])
  
  
  console.log(properties)

  const renderItem = ( {item}) => (
    <PropertyCard>
     
      <PropertyImage source={{ uri: item.fotos[0] }} />
      <PropertyTitle>{item.titulo}</PropertyTitle>
      <PropertyLocation>{item.endereco}</PropertyLocation>
      <PropertyPrice>{item.valor}</PropertyPrice>
      <Link href={`/ImovelDetais/${item._id}`}>
      <MaterialCommunityIcons name="eye" size={24} color="black" />
      </Link>
    </PropertyCard>
  );
  

  return (
    <Container>
    <Header>
      <Greeting>Hi, Francisco Pedro</Greeting>
      <Location>Luanda, Talatona</Location>
    </Header>

    <SearchBar 
    placeholder="Search" 
    />
    <FeaturedTitle>Featured</FeaturedTitle>
    <PropertyList
    data={properties}
    renderItem={renderItem}
    keyExtractor={({...item}:ImovelProps)=>item._id}
 

    />
      
     
    

 
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
