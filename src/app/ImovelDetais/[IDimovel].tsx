import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { Container,ImovelDetail,ImovelDetails,ImovelTitle,ImovelPhoto,ImovelPhotos } from './style';
import { useLocalSearchParams } from 'expo-router';
import { ImovelProps } from '../../interfaces/interfaces';
import { api } from '../../api/api';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function ImovelDetailsScreen() {
    const [imovel,setImovel]=useState<ImovelProps|{}>({})
    const {IDimovel}=useLocalSearchParams()


    const buscarImovel=async()=>{
     await api.get(`/imovel/detalhes/${IDimovel}/imovel`)
     .then( async(response)=>{
      const newImovel=await response.data.imovel
      setImovel(newImovel)
     })
    }
    useEffect(()=>{
      buscarImovel()
    },[])

  return (
    <SafeAreaView
    style={{
      flex:1
    }}
    >

    <Container>
      <ImovelTitle>{imovel.tipo}</ImovelTitle>
      <ImovelDetails>
        <ImovelDetail>Descrição: {imovel.descricao}</ImovelDetail>
        <ImovelDetail>Endereço: {imovel.endereco}</ImovelDetail>
        <ImovelDetail>Referencia: {imovel.referencia}</ImovelDetail>
        <ImovelDetail>Provincia: {imovel.provincia}</ImovelDetail>
        <ImovelDetail>Bairro: {imovel.bairro}</ImovelDetail>
        <ImovelDetail>Area: {imovel.area}</ImovelDetail>
        <ImovelDetail>Quatros: {imovel.quartos}</ImovelDetail>
        <ImovelDetail>Banheiros: {imovel.banheiros}</ImovelDetail>
        <ImovelDetail>Garagem: {imovel.vagasGaragem}</ImovelDetail>
        <ImovelDetail>Preço: {imovel.valor}</ImovelDetail>
        <ImovelDetail>Propreitário: {imovel.proprietario}</ImovelDetail>
        {/* Adicione mais detalhes do imóvel aqui */}


        <FlatList

        data={imovel.fotos}
        keyExtractor={(item,index)=>index}
        renderItem={({item})=>{
          <Image
            key={item}
            source={{ uri: item.fotos }}
            style={{ width: 200, height: 150, margin: 10 }}
          />

        }}
        />

        <ImovelPhotos>
    
      </ImovelPhotos>
      </ImovelDetails>
    </Container>
    </SafeAreaView>
  );
}