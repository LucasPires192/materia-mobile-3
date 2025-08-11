import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const BtnContar = () => {
    const [contador, setContador] = useState(0);

    const increment = () => {
        setContador(contador + 1);
    }
    const reset = () => {
        setContador(0);
    }
    return (
        <View style={styles.countContainer}>
            <Text style={styles.text}>{contador}</Text>
            <TouchableOpacity style={styles.btnContar} onPress={increment}>
                <Text>Contar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnReset} onPress={reset}>
                <Text>Zerar</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create ({
    text: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 800,
        backgroundColor: '#B0B0B0',
        marginTop: 10,
        borderRadius: 5,
    },
    btnContar: {
        backgroundColor: '#55Acf2',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 5,
        marginTop: 10,
    },
    btnReset: {
        backgroundColor: '#D65454',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 5,
        marginTop: 10,
    },
})
export default BtnContar;