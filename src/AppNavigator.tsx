import React from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './Splash'
import SignUp from './SignUp'
import Login from './Login'
const Stack = createNativeStackNavigator();
const AppNavigator=()=>{
    return (
        <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
                <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
                <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
              </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;