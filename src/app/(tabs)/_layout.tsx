import React, { useEffect } from 'react';
import {FontAwesome,AntDesign} from '@expo/vector-icons';
import { router, Tabs } from 'expo-router';

export default function TabLayout() {
  const userLogado=true
  
  useEffect(()=>{
    if(!userLogado){
    router.navigate("/signIn/")
    }
    
  })
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' ,headerShown:false}}>
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color}
           />,
           headerShown:false,
        }}
      />
        
      <Tabs.Screen
        name="message/index"
        options={{
          title: 'Messagens',
          tabBarIcon: ({ color }) => <AntDesign size={28} name="message1" color={color} />,
          headerShown:false,
        }}
      />
       <Tabs.Screen
        name="favorite"
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="heart" color={color} />,
          headerShown:false,
        }}
      />
      <Tabs.Screen
          name="profile/[user]"
          options={{
            title: 'Perfil',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
            headerShown:false,
          }}
        />
    </Tabs>
  );
}
