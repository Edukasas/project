import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setAppsBlocked(apps) {
    try {
        await AsyncStorage.setItem('appsBlocked', JSON.stringify(apps));
    } catch (e) {
    }
}

export async function getAppsBlocked() {
    var apps = null;
    try {
       apps = await AsyncStorage.getItem('appsBlocked');
       if (apps) {
        apps = JSON.parse(apps);
       }
    } catch (e) {
    }

    return apps;
}