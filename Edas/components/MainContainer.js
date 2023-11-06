import {Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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

const MyTheme = {
    colors: {
      background: '#354171', // Set your desired background color for the header here
      text: 'white',
    }
  };
const ActiveIcon = ({ source }) => (
    <Image
      source={source}
      style={{
        width: 64,   // Adjust the width and height for the desired size
        height: 32,
      }}
    />
  );
  const InactiveIcon = ({ source }) => (
    <Image
      source={source}
      style={{
        width: 64,   // Adjust the width and height for the desired size
        height: 32,
      }}
    />
  );

export default function MainContainer() {
    return (
        <NavigationContainer theme={MyTheme}> 
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarStyle: {height: 80, backgroundColor: '#354171'},
                tabBarLabelStyle: {paddingBottom: 16, fontFamily: 'Roboto-Medium'},
                tabBarIcon: ({focused, color, size}) => {
                    // let iconSource;
                    let iconName
                    let rn = route.name;

                    if (rn === homeName){
                        iconSource = focused? require('../assets/images/footericons/activehome.png') : require('../assets/images/footericons/home.png');
                        //  iconName = focused? 'home' : 'home-outline'
                    }
                    else if (rn === BlockedAppListName){
                        iconSource = focused? require('../assets/images/footericons/activeblocker.png') : require('../assets/images/footericons/blocker.png');
                        // iconName = focused? 'remove-circle' : 'remove-circle-outline'
                    }
                    else if (rn === StatisticsName){
                        iconSource = focused? require('../assets/images/footericons/activestatistic.png') : require('../assets/images/footericons/statistic.png');
                        // iconName = focused? 'stats-chart' : 'stats-chart-outline'
                    }
                    else if (rn === SettingsName){
                        iconSource = focused? require('../assets/images/footericons/activesettings.png') : require('../assets/images/footericons/settings.png');
                        // iconName = focused? 'settings' : 'settings-outline'
                    }

                    return focused ? <ActiveIcon source={iconSource} /> : <InactiveIcon source={iconSource} />;
                    // return <Ionicons name={iconName} size={size} color={color}/>
                },
            })}
            tabBarOptions={{
              activeTintColor: 'white', // Set the color for active (focused) tabs
              inactiveTintColor: '#DDE1FF', // Set the color for inactive tabs
            }}
            >



            <Tab.Screen name={homeName} component={HomeScreen}/>
            <Tab.Screen name={BlockedAppListName} component={BlockedAppScreen}/>
            <Tab.Screen name={StatisticsName} component={StatisticsScreen}/>
            <Tab.Screen name={SettingsName} component={SettingsScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
