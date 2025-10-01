import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

const Calculadora = () => {
  const [primeiroNumero, setPrimeiroNumero] = useState('');
  const [segundoNumero, setSegundoNumero] = useState('');
  const [resultado, setResultado] = useState(null);

  const somar = () => {
    const num1 = parseFloat(primeiroNumero);
    const num2 = parseFloat(segundoNumero);
// Verificação se é um número válido
    if (isNaN(num1) || isNaN(num2)) {
      Alert.alert('Erro', 'Por favor, insira apenas números válidos.');
      return;
    }

    setResultado(num1 + num2);
  };

  const limparCampos = () => {
    setPrimeiroNumero('');
    setSegundoNumero('');
    setResultado(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de Soma</Text>
      
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Primeiro número"
        value={primeiroNumero}
        onChangeText={setPrimeiroNumero}
      />

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Segundo número"
        value={segundoNumero}
        onChangeText={setSegundoNumero}
      />
      
      <View style={styles.botoesContainer}>
        <TouchableOpacity style={styles.botao} onPress={somar}>
          <Text style={styles.textoBotao}>Somar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, styles.botaoLimpar]} onPress={limparCampos}>
          <Text style={styles.textoBotao}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {resultado !== null && (
        <Text style={styles.textoResultado}>Resultado: {resultado}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 18,
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  botaoLimpar: {
    backgroundColor: '#dc3545',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textoResultado: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#28a745',
  },
});

export default Calculadora;