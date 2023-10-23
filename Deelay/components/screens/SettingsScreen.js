import {StyleSheet, Image, Text, View} from 'react-native';
import { useFonts } from 'expo-font';

export default function SettingsScreen({navigation}) {
    const [fontsLoaded] = useFonts({
        'Roboto': require('../../assets/fonts/Roboto-Bold.ttf'),
      });
    navigation.setOptions({
        headerStyle: {
          height: 100
        },
        headerTitleStyle: {
            fontSize: 20,
           fontFamily: 'Roboto', // Set your desired font family
          },
    });
    return (
            <View style={styles.Container}>
                <Text onPress={() => navigation.navigate('Home')}
                 style={styles.containertext}>Settings Screen</Text>
            </View>
    );
}

const styles = StyleSheet.create({
    containertext: {
        color: 'white',
        textAlign: 'center',
    },
    Container: {
        backgroundColor: 'black',
        height: '100%',
    }
});