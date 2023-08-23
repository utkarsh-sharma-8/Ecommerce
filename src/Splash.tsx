import { useNavigation } from '@react-navigation/native';
import { User, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Text, View } from 'react-native';
import { FIREBASE_AUTH } from '../FirebaseConfig';
const Splash=()=>{
// the User is imported from firebase auth and is provided one value null if device is not logged in
    const [user,setUser]=useState <User | null>(null);
//to navigate to other screens//
    const navigation=useNavigation();
//to add the animmation create a reference by using useRef//
    const animation=useRef(new Animated.Value(0)).current;
    const startAnimation=()=>{
        Animated.spring(animation,{
            toValue:1,//the initial value is set 0 so now we are changing its position from 0 to 1//
            useNativeDriver:true,//to make our animation smooth //
        }).start();
    }
    useEffect(()=>{
        setTimeout(()=>{
            startAnimation();
{/To check if device has already logged in or not if logged in go to Home screen if not then go to loggin screen*/}
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
{/*output range tells where the final positon is going to be -376 shows it goes by 376 pixels */}
            <Animated.View style={[{transform:[{translateY:animation.interpolate({
                inputRange:[0,1],
                outputRange:[0,-356],})
                    }
                ]}
            ]}>
            <Text style={{color:'white',fontSize:40}}>Ecommerce</Text>
            </Animated.View>
        </View> 
    );
};

export default Splash;