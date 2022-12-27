import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './constants/routes';
import SplashScreen from './screens/splash/splashScreen';
import LoginScreen from './screens/login/loginScreen';
import MainScreen from './screens/main/mainScreen';
// import LoginNavigator from './loginNavigator';
// import TabNavigator from './tabNavigator';
const Stack = createNativeStackNavigator ();

function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.SPLASH} screenOptions={{headerShown: false}} >
        <Stack.Screen name={Routes.SPLASH} component={SplashScreen} options={{ animationEnabled: false, }}/>
        <Stack.Screen name={Routes.LOGIN} component={LoginScreen} options={{ animationEnabled: false, }}/>
        <Stack.Screen name={Routes.MAIN} component={MainScreen} options={{ animationEnabled: false, }}/>
        {/* <Stack.Screen name={Routes.AUTH} component={LoginNavigator} options={{ animationEnabled: false, }} />
        <Stack.Screen name={Routes.TAB} component={TabNavigator} options={{ animationEnabled: false, }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer;
