import {Text, View} from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import BlockedAppScreen from './screens/BlockedAppListScreen';
import SettingsScreen from './screens/SettingsScreen';
import StatisticsScreen from './screens/StatisticsScreen';

// Screen Names
const homeName = 'Home';
const BlockedAppListName = 'Apps Blocked';
const StatisticsName = 'Statistics';
const SettingsName = 'Settings';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    // const [fontsLoaded] = useFonts({
    //     'Roboto': require('../assets/fonts/Roboto-Medium.ttf'),
    //   });
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName){
                        iconName = focused? 'home' : 'home-outline'
                    }
                    else if (rn === BlockedAppListName){
                        iconName = focused? 'blocked' : 'dangerous'
                    }
                    else if (rn === StatisticsName){
                        iconName = focused? 'stats-chart' : 'stats-chart-outline'
                    }
                    else if (rn === SettingsName){
                        iconName = focused? 'settings' : 'settings-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },
            })}>
            
            <Tab.Screen name={homeName} component={HomeScreen}/>
            <Tab.Screen name={BlockedAppListName} component={BlockedAppScreen}/>
            <Tab.Screen name={StatisticsName} component={StatisticsScreen}/>
            <Tab.Screen name={SettingsName} component={SettingsScreen}/>
            </Tab.Navigator>
        </NavigationContainer>





        // <View style={styles.Footer}>
        //         <View style={styles.SmallBlock}>
        //             <Image source={require('../assets/images/footericons/activehome.png')} style={styles.logo}  /> 
        //             <Text style={styles.names}>Home</Text>
        //         </View>
        //         <View style={styles.SmallBlock}>
        //             <Image source={require('../assets/images/footericons/blocker.png')} style={styles.logo}  /> 
        //             <Text style={styles.names}>App limits</Text>
        //         </View>
        //         <View style={styles.SmallBlock}>
        //             <Image source={require('../assets/images/footericons/statistic.png')} style={styles.logo}  /> 
        //             <Text style={styles.names}>Statistics</Text>
        //         </View>
        //         <View style={styles.SmallBlock}>
        //             <Image source={require('../assets/images/footericons/settings.png')} style={styles.logo}  /> 
        //             <Text style={styles.names}>Settings</Text>
        //         </View>
        // </View>
    );
}

// const styles = StyleSheet.create({
//     Footer: {
//         backgroundColor: '#354171',
//         position: 'absolute',
//         bottom: 0,
//         width: '100%',
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         paddingLeft: 20,
//         paddingRight: 20,
//         paddingTop: 12,
//     },
//     names: {
//         color: '#DDE1FF',
//         textAlign: 'center',
//         paddingBottom: 16,
//         fontFamily: 'Roboto',
//         marginTop: 5,
//     }
// });