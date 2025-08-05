import { Text, View, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Contact = () => {
    const iconSize = 50;

    return (
        <View style={styles.content}>
            <Text style={styles.title}>Entre em Contato</Text>
            
            <TouchableOpacity style={styles.socialIcon} >
                <Ionicons name="mail" size={iconSize} color="#6200ee" />
                <Text style={styles.contactText}>contato@marca.com.br</Text>
            </TouchableOpacity>
            
            <View style={styles.socialMedia}>
                <TouchableOpacity style={styles.socialIcon}>
                    <Ionicons name="logo-facebook" size={iconSize} color="#3b5998" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialIcon}>
                    <Ionicons name="logo-instagram" size={iconSize} color="#3b5998" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialIcon}>
                    <Ionicons name="logo-linkedin" size={iconSize} color="#3b5998" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialIcon}>
                    <Ionicons name="logo-youtube" size={iconSize} color="#3b5998" />
                </TouchableOpacity>
            </View>
        </View>
    );
};
        
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c2c2c2ff',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        marginTop: 16,
        paddingVertical: 8,
        borderBottomWidth: 4,
        borderColor: '#20232a',
        borderRadius: 6,
        color: '#20232a',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    socialIcon: {
        flex: 0,
        alignItems: 'center',
        marginTop: 50,
    },
});

export default Contact;