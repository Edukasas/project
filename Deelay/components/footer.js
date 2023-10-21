import {StyleSheet, Image, Text, View} from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
    const [fontsLoaded] = useFonts({
        'Roboto': require('../assets/fonts/Roboto-Medium.ttf'),
      });
    return (
        <View style={styles.Footer}>
                <View style={styles.SmallBlock}>
                    <Image source={require('../assets/images/footericons/activehome.png')} style={styles.logo}  /> 
                    <Text style={styles.names}>Home</Text>
                </View>
                <View style={styles.SmallBlock}>
                    <Image source={require('../assets/images/footericons/blocker.png')} style={styles.logo}  /> 
                    <Text style={styles.names}>App limits</Text>
                </View>
                <View style={styles.SmallBlock}>
                    <Image source={require('../assets/images/footericons/statistic.png')} style={styles.logo}  /> 
                    <Text style={styles.names}>Statistics</Text>
                </View>
                <View style={styles.SmallBlock}>
                    <Image source={require('../assets/images/footericons/settings.png')} style={styles.logo}  /> 
                    <Text style={styles.names}>Settings</Text>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Footer: {
        backgroundColor: '#354171',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 12,
    },
    names: {
        color: '#DDE1FF',
        textAlign: 'center',
        paddingBottom: 16,
        fontFamily: 'Roboto',
        marginTop: 5,
    }
});