import {StyleSheet, Image, Text, View, Pressable} from 'react-native';

export default function SettingsScreen({navigation}) {
    navigation.setOptions({
        headerStyle: {
            height: 70
        },
        headerTitleStyle: {
            fontSize: 22,
           fontFamily: 'Roboto-Bold', // Set your desired font family
          },
    });
    return (
            <View style={styles.Container}>
                 <Image
        source={require('../../assets/images/app_blocking.png')}
        style={styles.logo}
      />
            <Text style={styles.Text1}>No app limits created.</Text>
            <Text style={styles.Text2}>App limits enable you to use specific apps, block them for a set period, and then resume using them.</Text>
            <Pressable
              style={styles.button}>
                <Text style={styles.buttonText}>Create app limit</Text>
              </Pressable>
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
    },
    logo: {
        marginTop: 194,
        alignSelf: 'center',
    },
    Text1: {
        alignSelf: 'center',
        marginTop: 24,
        marginBottom: 24,
        fontFamily: 'Roboto-Bold',
        color: 'white',
        fontSize: 16,
    },
    Text2: {
        color: '#94A3E4',
        fontFamily: 'Roboto-Regular',
        fontSize: 15,
        textAlign: 'center',
        alignSelf: 'center',
        width: 248,
        lineHeight: 17,
    },
    button: {
        backgroundColor: '#14151A',
        borderRadius: 17,
        alignSelf: 'center',
        marginTop: 24,
    },
    buttonText: {
        color: '#BBC4EC',
        fontFamily: 'Roboto-Bold',
        alignSelf: 'center',
        marginTop: 9,
        marginBottom: 9,
        marginLeft: 29,
        marginRight: 29,  
    }
});