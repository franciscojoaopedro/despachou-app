import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function Inicial() {

  return (
    <View style={styles.container}>
      <Text>Tela inicial</Text>

      
      <Link href={"/signIn/"} asChild>
        <Button title='Tabs'/>
      </Link>
      <StatusBar style="auto" />
    </View>
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
