import React, { useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";

export default function Endereco() {
  const [cep, setCep] = useState(""); 
  const [endereco, setEndereco] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function buscarEndereco() {
    if (!cep) {
      setError("Digite um CEP válido.");
      return;
    }

    setLoading(true);
    setError("");
    setEndereco(null);

    try {
      debugger
      const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await res.json();

      if (data.erro) {
        setError("CEP não encontrado.");
      } else {
        setEndereco(data);
      }
    } catch (e) {
      setError("Erro ao buscar o CEP. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Consulta de Endereço</Text>
      
      <TextInput
        placeholder="Digite o CEP"
        value={cep}
        onChangeText={setCep}
        style={styles.input}
        keyboardType="numeric"
      />

      <Button title="Buscar" onPress={buscarEndereco} />

      {loading && <ActivityIndicator size="large" style={{ marginTop: 20 }} />}

      {error ? <Text style={styles.error}>{error}</Text> : null}

      {endereco && (
        <View style={styles.card}>
          <Text>Logradouro: {endereco.logradouro}</Text>
          <Text>Bairro: {endereco.bairro}</Text>
          <Text>Cidade: {endereco.localidade}</Text>
          <Text>Estado: {endereco.uf}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "flex-start",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    borderRadius: 5,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
  card: {
    marginTop: 20,
    padding: 15,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#f5f5f5",
  },
});
