import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FIREBASE_AUTH } from '../FirebaseConfig';

const Login=()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const auth = FIREBASE_AUTH;
    const navigation=useNavigation();

    const SignIn=async()=>{
//this is new documentation for firebase v9 or greater.If wanted to login with existing user credentials//
        try {
            const response =await signInWithEmailAndPassword(auth,email,password);
            console.log(response);
            navigation.navigate('Home')

        }catch(error){
            if(error='auth/user-not-found)'){
                Alert.alert('Incorrect Username/Password');
            }else{
                console.log(error);
            }
        }
    }

    return(
        <View style={{height:'100%',backgroundColor:'#008080'}}>
            <View style={{alignItems: "center"}}>
                <Text style={{fontSize:40,color:'white'}}>Ecommerce</Text>
            </View>
            <View style={{backgroundColor:'#4C516D',marginTop:200,height:700,borderTopLeftRadius:50}}>
                <TextInput onChangeText={(text)=>setEmail(text)} style={{borderWidth:5,borderRadius:20,marginTop:100,borderColor:'white',marginLeft:80,width:250,fontWeight:"bold",fontSize:20,color:'white'}} placeholder='Email' placeholderTextColor='white' value={email}/>
                <TextInput onChangeText={(text)=>setPassword(text)}style={{borderWidth:5,borderColor:'white',borderRadius:20,marginLeft:80,width:250,marginTop:30,fontWeight:"bold",fontSize:20,color:'white'}} placeholder='Password' placeholderTextColor='white' value={password}/>
                <TouchableOpacity style={{marginTop:100}} onPress={SignIn}>
                    <Text style={{fontSize:30,color:'white',marginLeft:170}}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}}>{/*to navigate to signup page */}
                    <Text style={{color:'blue',fontSize:15,fontWeight:'bold',marginLeft:110}}>Do not have an account? SignUp</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default Login;