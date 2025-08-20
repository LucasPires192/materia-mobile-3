import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D2691E',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tituloContainer: {
        padding: 20,
        backgroundColor: '#bc6120ff',
        width: '100%',
    },
    titulo: {
        fontSize: 32,
        fontWeight: 600,
        textAlign: 'center',
    },
    card: {
        borderColor: '#a3541cff',
        borderWidth: 1,
        background: '#de7021ff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
    },
    capa: {
        width: 250,
        height: 350,
    },
    descricao: {
        fontSize: 16,
        textAlign: 'center',
    },
})