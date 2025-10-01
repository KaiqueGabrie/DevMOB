import React, { useState } from "react";
import { View, Text, Button } from "react-native";

function Contador(){
    const [ contador, setContador ] = useState(0);

    const incrementar = () => {
        setContador(contador + 1);
    };
    const decrementar = () => {
        setContador(contador - 1);
    };
    return(
        <View>
            <Text>Contador: {contador}</Text>
            <Button onPress={incrementar} title="Incrementar"></Button>
            <Button onPress={decrementar} title="Decrmetar"></Button>
        </View>
    );
};

export default Contador;