import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { User, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Text, View } from 'react-native';
import { FIREBASE_AUTH } from '../FirebaseConfig';

const Stack = createNativeStackNavigator();
const Splash=()=>{
    const [inside,setInside]=useState(true);
    const [user,setUser]=useState <User | null>(null);
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
            onAuthStateChanged(FIREBASE_AUTH,(user)=>{
                console.log('user',user);
                setUser(user);
                if(user!==null){
                    navigation.navigate('Home');
                }else{
                    navigation.navigate('Login');
                }
            });
        },2000);
    },[]);
    
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#232B2B'}}>
            <Animated.View style={[{transform:[{translateY:animation.interpolate({
                inputRange:[0,1],
                outputRange:[0,-376],})
                    }
                ]}
            ]}>
            <Text style={{color:'white',fontSize:40}}>Ecommerce</Text>
            </Animated.View>
        </View> 
    );
};

export default Splash;