import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
        marginTop: 16,
        paddingVertical: 8,
        borderBottomWidth: 4,
        borderColor: '#20232a',
        color: '#20232a',
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold',
    },
    textContainer: {
        padding: 20,
        textAlign: 'center',
        lineHeight: 1.6,
    },
    subTitle: {
        marginTop: 16,
        color: '#20232a',
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontSize: 24,
        fontWeight: 'bold',
    },
    describe: {
        fontSize: 16,
        textAlign: 'justify',
        lineHeight: 20,
    },
    etec: {
        width: '300',
        height: '300',
        marginTop: '30',
        borderRadius: 10,
    }
});

export default styles;