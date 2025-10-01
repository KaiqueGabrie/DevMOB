import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native-web';
import Contador from './components/Contador';
import Saudacao from './components/Saudacao';
import Calculadora from './components/Calculadora';


export default function App() {
  return (
    <View style={styles.container}>
      <Saudacao nome="Kaique"></Saudacao>
      <Calculadora/>
      <Contador/>
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
