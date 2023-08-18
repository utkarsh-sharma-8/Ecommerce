import React,{useState} from 'react';
import {View,Text,TextInput,TouchableOpacity} from 'react-native';
import Background from './Background';
import {FIREBASE_AUTH} from '../FirebaseConfig';
import {signInWithEmailAndPassword} from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const Login=()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const auth = FIREBASE_AUTH;
    const navigation=useNavigation();

    const SignIn=async()=>{
        try {
            const response =await signInWithEmailAndPassword(auth,email,password);
            console.log(response);

        }catch(error){
            console.log(error);
        }
    }

    return(
        <View style={{backgroundColor:'grey'}}>
            <View style={{alignItems: "center"}}>
                <Text style={{fontSize:40,color:'white'}}>Ecommerce</Text>
            </View>
            <View style={{marginVertical:300}}>
                <TextInput onChangeText={(text)=>setEmail(text)} style={{borderWidth:5,borderRadius:20,borderColor:'white',marginLeft:80,width:250,fontWeight:"bold",fontSize:20,color:'white'}} placeholder='Email' placeholderTextColor='white' value={email}/>
                <TextInput onChangeText={(text)=>setPassword(text)}style={{borderWidth:5,borderColor:'white',borderRadius:20,marginLeft:80,width:250,marginTop:30,fontWeight:"bold",fontSize:20,color:'white'}} placeholder='Password' placeholderTextColor='white' value={password}/>
                <TouchableOpacity style={{marginTop:100}} onPress={SignIn}>
                    <Text style={{fontSize:30,color:'white',marginLeft:170}}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}}>
                    <Text style={{color:'blue',fontSize:15,fontWeight:'bold',marginLeft:110}}>Do not have an account? SignUp</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default Login;