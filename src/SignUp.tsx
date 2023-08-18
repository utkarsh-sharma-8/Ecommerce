import React,{useState} from 'react';
import {View,Text,TextInput,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {FIREBASE_AUTH} from '../FirebaseConfig';
import {createUserWithEmailAndPassword} from '@firebase/auth';

const SignUp=()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [name,setName]=useState('');
    const [mobile,setMobile]=useState('');
    const navigation=useNavigation();

    const signUp=async()=>{
        try {
            const response =await createUserWithEmailAndPassword(auth,email,password);
            console.log(response);
        }catch(error){
            console.log(error);
        }
    }
    return (
        <View style={{height:'100%',backgroundColor:'#008080'}}>
            <View>
                <View style={{alignItems:'center'}}>
                    <Text style={{fontSize:40,color:'white'}}>Ecommerce</Text>
                </View>
                <View style={{alignItems:'center',marginTop:80,marginBottom:50}}>
                    <Text style={{fontSize:30,color:'white'}}>Welcome</Text>
                    <Text style={{fontSize:20,marginTop:20,color:'white'}}>Please SignIn first!!</Text>
                </View>
            </View>
            <View style={{backgroundColor:'#4C516D',height:700,borderTopLeftRadius:50}}>
                <TextInput onChangeText={(text)=>setName(text)} style={{marginTop:50,borderWidth:2,borderRadius:20,borderColor:'white',marginLeft:80,width:250,fontSize:15,color:'white',paddingLeft:20}} placeholder='Name' placeholderTextColor='white' value={name}/>
                <TextInput onChangeText={(text)=>setEmail(text)} style={{borderWidth:2,borderRadius:20,borderColor:'white',marginLeft:80,width:250,marginTop:30,fontSize:15,color:'white',paddingLeft:20}} placeholder='Email' placeholderTextColor='white' value={email}/>
                <TextInput onChangeText={(text)=>setMobile(text)} style={{borderWidth:2,borderRadius:20,borderColor:'white',marginLeft:80,width:250,marginTop:30,fontSize:15,color:'white',paddingLeft:20}} placeholder='Mobile No.' placeholderTextColor='white' value={mobile}/>
                <TextInput onChangeText={(text)=>setPassword(text)}style={{borderWidth:2,borderColor:'white',borderRadius:20,marginLeft:80,width:250,marginTop:30,marginTop:30,fontSize:15,color:'white',paddingLeft:20}} placeholder='Password' placeholderTextColor='white' value={password}/>
                <TextInput onChangeText={(text)=>setConfirmPassword(text)}style={{borderWidth:2,borderColor:'white',borderRadius:20,marginLeft:80,width:250,marginTop:30,fontSize:15,color:'white',paddingLeft:20}} placeholder='Confirm Password' placeholderTextColor='white' value={confirmPassword}/>
                    <TouchableOpacity style={{marginTop:30}} onPress={signUp}>
                        <Text style={{fontSize:30,color:'white',marginLeft:170}}>SignIn</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
                        <Text style={{color:'#73C2FB',fontSize:15,fontWeight:'bold',marginLeft:110}}>Already have an account? SignUp</Text>
                    </TouchableOpacity>
            </View>

        </View>
    );
};

export default SignUp;