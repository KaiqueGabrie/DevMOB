import React, {useState} from "react";
import {Text, View, TextInput, TouchableOpacity, Alert} from "react-native";
import { globalStyles } from "../styles/globalStyles"; //o .. serve para voltar uma pasta


export default function Formulario(){
    const [nome, setNome] = useState(''); // constante para salvar dados, não muda
    
    const [nomeError, setNomeError] = useState('');

    const [email, setEmail] = useState('');

    const validateForm = () =>{
        let isValid = true;

        if(!nome.trim()){
            setNomeError("Nome é obrigatório!")
            isValid = false;
        }else{
            setNomeError("")
        }
        return isValid;
    }

    const handleSumit = () => {// recebe função anonima
        if( validateForm() ) {
            const dados = { nome };
            console.log("Dados do formulário válidos", dados);
            Alert.alert("Sucesso!"); // modal nativo do celular, só funciona no celular
            alert("Sucesso!");
            // Reset form
            setNome("");
        }else{
            Alert.alert("Erro!","Formulário Erro"); // modal nativo do celular, só funciona no celular
            alert("Erro!");
        }
    };

    return( // pegando styles do arquivo globalStyles
        <View style={globalStyles.container}>
            <View style={globalStyles.scrollContent}>
                <Text style={globalStyles.title}>Formulário</Text>

                <View style={globalStyles.inputContainer}>
                    <TextInput 
                        style={[globalStyles.input, nomeError && globalStyles.inputError]} // se usar mais de um style, precisa colocar em colchete para não dar ero, indica que será uma lista
                        placeholder="Nome Completo"
                        value={nome}
                        onChangeText={setNome}
                    ></TextInput>
                    { nomeError ? <Text style={globalStyles.errorText}>{nomeError}</Text>:null }


                    <TextInput style={globalStyles.input} 
                    placeholder="E-mail" 
                    value={email} 
                    onChangeText={setEmail}></TextInput>
                    
                </View>
                <TouchableOpacity style={globalStyles.button} onPress={handleSumit}>
                    <Text style={globalStyles.buttonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
