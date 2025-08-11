import { Text, View, TouchableOpacity, ScrollView} from 'react-native';
import styles from './style.js'
import globalStyles from '../../global-style.js'
import { Ionicons } from '@expo/vector-icons';

const Contact = () => {
    const iconSize = 50;
    const iconColor = '#c2c2c2';

    return (
        <ScrollView style={globalStyles.container}>
            <View style={globalStyles.content}>
                <Text style={styles.title}>Entre em Contato</Text>
                
                <TouchableOpacity style={styles.socialIcon} >
                    <Ionicons name="mail" size={iconSize} color={{iconColor}} />
                    <Text style={styles.contactText}>contato@marca.com.br</Text>
                </TouchableOpacity>
                
                <View style={styles.socialMedia}>
                    <TouchableOpacity style={styles.socialIcon}>
                        <Ionicons name="logo-facebook" size={iconSize} color={{iconColor}} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialIcon}>
                        <Ionicons name="logo-instagram" size={iconSize} color={{iconColor}} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialIcon}>
                        <Ionicons name="logo-linkedin" size={iconSize} color={{iconColor}} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialIcon}>
                        <Ionicons name="logo-youtube" size={iconSize} color={{iconColor}} />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default Contact;