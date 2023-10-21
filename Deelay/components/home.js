import {StyleSheet, Image, Text, View} from 'react-native';
import Footer from './footer';

export default function App() {
    return (
        <View style={styles.Parent}>
            <View style={styles.Header}>
                <Image source={require('../assets/images/logo.png')} style={styles.logo}  /> 
            </View>
            <View style={styles.Container}>
            </View>
            <View style={styles.Footer}>
                <Footer />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Parent: {
        backgroundColor: 'transparent',
    },
    Header: {
        backgroundColor: '#354171',
    },
    logo: {
        width: 112,
        height: 48,
        marginTop: 40,
        marginLeft: 23,
        marginBottom: 11,
    },
    Container: {
        backgroundColor: 'black',
        height: '100%'
    },
    Footer: {
        position: 'relative',
        bottom: '23%',
    }
});