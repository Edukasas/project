import { View, StyleSheet } from 'react-native';
import Start from './components/Start';
import { useState } from 'react';
import MainContainer from './components/MainContainer';
export default function App() {

  const [page, setPage] = useState('start');

  return (
    <View style={styles.container}>
        {page === 'start' ? <Start onPress={() => setPage('main')}/> : <MainContainer /> } 
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

