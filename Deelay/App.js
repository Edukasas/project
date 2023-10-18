import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'roboto-slab': require('./assets/fonts/RobotoSlab-Regular.ttf'),
  });

  return (
    <View style={styles.container}>
       <LinearGradient
        // Background Linear Gradient
        colors={['#524E8D', '#6F3A3A']}
        style={styles.background}
      />
        <View style={styles.topPart}>
        <View style={styles.topBlock}>
          <View style={styles.row}>
            <Image source={require('./assets/images/stars.png')} style={styles.logoStars} resizeMode="cover"  />
          </View>
          <View style={styles.row2}>
            <Image source={require('./assets/images/logo.png')} style={styles.logo}  />
          </View>
        </View>
        <View style={styles.row3}>
          <Text style={styles.text}>Start being more productive by limiting screen time and enjoying life without distractions</Text>
        </View>
      </View>
      <View style={styles.bottomPart}>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topPart: {
    flex: 1
  },
  text: {
    color: '#E8E8E8',
    lineHeight: 18.46,
    fontFamily: 'roboto-slab',
    textAlign: 'center'
  },
  topBlock: {
    flex: 1
  },
  row: {
    flex: 1,
    alignSelf: 'flex-end',
    height: 160
  },
  row2: {
    flex: 1,
    alignItems: 'center',
  },
  row3: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 17,
    paddingRight: 17,
  },
  container: {
    flex: 1,
  },
  bottomPart: {
    flex: 0.975,
    backgroundColor: '#E8E8E8',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  },
  logo: {
    width: 227,
    height: 96,
  },
  logoStars: {
    width: 135,
    height: 160
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 800,
  },
});
