import React, { createContext, ReactNode, useState } from 'react';
import { loginProps } from '../interfaces/interfaces';
import { api } from '../api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { router } from 'expo-router';
import{UserProps,UserContextValueProps} from "../interfaces/interfaces"

interface Props {
    children: ReactNode;
  }  


export const UserContext = createContext<UserContextValueProps | null>(null);


export const UserProvider=({children}:Props)=>{
    const [user,setUser]=useState<UserProps | null>(null)

    const login= async({email,senha}:loginProps)=>{
        await api.post('/session/login',{email,senha}
        )
        .then(async(response)=>{
          const token =JSON.stringify(response.data);
          await AsyncStorage.setItem("despachou-token",token)
          Alert.alert("Logado","Seja bem vindo")
          router.replace("/(tabs)/home")
        })
        .catch((error)=>{
          console.log(error)
          Alert.alert("Erro","Não possivel fazer o login")
        })
    }
    const logout=async()=>{
        await  AsyncStorage.removeItem("despachou-token")
        .then(()=>{
            Alert.alert("SESSÃO ENCERRADA","ATÉ BREVE")
        })

        router.dismissAll()
    }

    return(
        <UserContext.Provider value={{user,login,logout}}>
            {children}
        </UserContext.Provider>
    )
}