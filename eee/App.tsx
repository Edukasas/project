import { View, StyleSheet } from 'react-native';
import Start from './components/Start';
import { useState } from 'react';
import MainContainer from './components/MainContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { InstalledApps } from 'react-native-launcher-kit';

export default function App() {
  const apps = InstalledApps.getApps();
  
  const [page, setPage] = useState('start');
 // alert(InstalledApps.getApps());
  const isStarted = async () => {
    try {
        const started = await AsyncStorage.getItem('isStarted');
        if (started) {
          setPage('main');
        }
    } catch (e) {
    }
  }
  const setIsStarted = async () => {
    try {
        await AsyncStorage.setItem('isStarted', 1);
    } catch (e) {
    }
  }

  const blocked = ['fb', 'google'];


  return (
    <View style={styles.container}>
        {page === 'start' ? <Start onPress={() => {
          setPage('main')
          setIsStarted();
          }}/> : <MainContainer /> } 
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

