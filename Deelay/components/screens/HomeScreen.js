import {StyleSheet, Image, Text, View} from 'react-native';

export default function HomeScreen({navigation}) {
     navigation.setOptions({
      headerStyle: {
        height: 100
      },
    headerTitle: () => (
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />
    ),
  });
    return (
        
            <View style={styles.Container}>
                <Text onPress={() => alert('This is home screen')}
                 style={styles.containertext}>HomeScreen</Text>
            </View>
    );
}

const styles = StyleSheet.create({
    Header: {
        backgroundColor: '#354171',
    },
    logo: {
        width: 112,
        height: 48,
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 11,
    },
    containertext: {
        color: 'white',
        textAlign: 'center',
    },
    Container: {
        backgroundColor: 'black',
        height: '100%',
    }
});