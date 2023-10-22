import {StyleSheet, Image, Text, View} from 'react-native';

export default function SettingsScreen({navigation}) {
    return (
        <View style={styles.Parent}>
            <View style={styles.Header}>
                <Image source={require('../../assets/images/logo.png')} style={styles.logo}  /> 
            </View>
            <View style={styles.Container}>
                <Text onPress={() => navigation.navigate('Home')}
                 style={styles.containertext}>Settings Screen</Text>
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
    containertext: {
        color: 'white',
        textAlign: 'center',
    },
    Container: {
        backgroundColor: 'black',
        height: '100%',
    },
    Footer: {
        position: 'relative',
        bottom: '23%',
    }
});