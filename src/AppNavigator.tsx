import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './Home/Home';
import MyCart from './Home/MyCart';
import Electronics from './HomeNext/Electronics';
import Login from './Login';
import SignUp from './SignUp';
import Splash from './Splash';

const Stack = createNativeStackNavigator();
const AppNavigator=()=>{ 
    return (
      //Creating a navigation container and putting all the screens in it//
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash'>
          <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
          <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
          <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
          <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
          <Stack.Screen name="Electronics" component={Electronics} options={{headerShown:false}}/>
          <Stack.Screen name="MyCart" component={MyCart} options={{headerShown:true}}/>


        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default AppNavigator;