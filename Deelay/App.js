import { View, StyleSheet } from 'react-native';
import StartScreen from './components/Start';
import HomeScreen from './components/home';
import Footer from './components/footer';

export default function App() {
  return (
    <View style={styles.container}>
        <StartScreen />
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

