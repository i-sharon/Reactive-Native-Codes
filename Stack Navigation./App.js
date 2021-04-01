/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { getFocusedRouteNameFromRoute, NavigationRouteContext } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';




function getHeaderTitle(route){
  const routeName=getFocusedRouteNameFromRoute(route)??'Home';
  
  switch(routeName){
    case 'Home':
      return 'Home';
      case 'Feed':
      return 'Feed';
      case 'Settings':
      return 'Settings';
  }
}

function shouldHeaderBeShown(route){
  const routeName=getFocusedRouteNameFromRoute(route)??'Home';
  switch(routeName){
    case 'Home':
      return false;   
  }
}
function HomeScreen({ navigation }) {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Extra Details"
        onPress={() => navigation.navigate('MoreDetails')}
      />
    </View>
  
  );
}
function MoreDetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>More Details Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function FeedScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
 const HomeStack=createStackNavigator();

 function HomeStackNavigator({navigation,route}) {
   
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
      
      />

    </HomeStack.Navigator>
  );
}

function HomeTabNavigator({navigation,route}){

    React.useLayoutEffect(() => {
      navigation.setOptions({ headerTitle: getHeaderTitle(route) });
    }, [navigation, route]);

  return(
    <Tab.Navigator screenOptions={({ route }) => ({
      
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Home') {
         {iconName='ios-home'
        }
        } else if (route.name === 'Settings') {
          iconName = 'ios-settings'
        }
       else if(route.name=='Feed')
        {
          iconName='logo-rss'
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
   
   
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} options={{ tabBarBadge:1}} />
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
     
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
        name="Home" 
        component={HomeTabNavigator} 
          options={({route})=>({
       headerShown:shouldHeaderBeShown(route)
       })} 
         />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="MoreDetails" component={MoreDetailsScreen} options={{ title: 'More Details' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


