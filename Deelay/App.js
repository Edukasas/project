import { View, StyleSheet } from 'react-native';
import MainContainer from './components/MainContainer';
export default function App() {
  return (
    <View style={styles.container}>
        <MainContainer />
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

