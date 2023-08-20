import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useRef } from 'react';
import { Animated, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();
const Splash=()=>{
    const navigation=useNavigation();
    const animation=useRef(new Animated.Value(0)).current;
    const startAnimation=()=>{
        Animated.spring(animation,{
            toValue:1,
            useNativeDriver:true,
        }).start();
    }
    useEffect(()=>{
        setTimeout(()=>{
            startAnimation();
            navigation.navigate('Login')
        },1200);
    },[]);
    
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#232B2B'}}>
            <Animated.View style={[{transform:[{translateY:animation.interpolate({
                inputRange:[0,1],
                outputRange:[0,-300],})
                    }
                ]}
            ]}>
                <Text style={{color:'white',fontSize:40}}>Ecommerce</Text>
            </Animated.View>

        </View> 
    );
};

export default Splash;