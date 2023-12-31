import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import uuid from 'react-native-uuid';
import { FIREBASE_AUTH, FIREBASE_DB } from '../FirebaseConfig';
const SignUp=()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [name,setName]=useState('');
    const [mobile,setMobile]=useState('');
    const navigation=useNavigation();
    const auth = FIREBASE_AUTH;
    const firestore=FIREBASE_DB;
//to store the user email mobile no. and name in database.// 
    const registerUser=async()=>{
        const userId=uuid.v4();
        const doc=await addDoc(collection(FIREBASE_DB,'users'),{
            name:name,
            email:email,
            mobile:mobile,
            userId:userId,

        });
    }
//to validate to textinput if any box is empty or password and confirm password matches or not
    const validate=()=>{
        let isValid=true;
        if(name==""){
            isValid=false;
        }
        if(email==""){
            isValid=false;
        }
        if(mobile=="" || mobile.length<10 || mobile.length>10){
            isValid=false;
        }
        if(password==""){
            isValid=false;
        }
        if(confirmPassword==""){
            isValid=false;
        }
        if(confirmPassword!==password){
            isValid=false;
        }
        return isValid;
    }

//to sign up the using email and password and authenticate the user//
    const signUp=async()=>{
        try {
            const response =await createUserWithEmailAndPassword(auth,email,password);
            console.log(response);
            registerUser();
            navigation.navigate('Home');

        }catch(error){
            if(error='(auth/email-already-in-use)'){
                Alert.alert('Email already registered');
                navigation.navigate('Login');
            }else{
                console.log(error);
            }
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
                <TextInput onChangeText={(text)=>setName(text)}style={{borderWidth:2,borderColor:'white',borderRadius:20,marginLeft:80,width:250,marginTop:30,fontSize:15,color:'white',paddingLeft:20}} placeholder='Name' placeholderTextColor='white' value={name}/>
                <TextInput onChangeText={(text)=>setEmail(text)} style={{borderWidth:2,borderRadius:20,borderColor:'white',marginLeft:80,width:250,marginTop:30,fontSize:15,color:'white',paddingLeft:20}} placeholder='Email' placeholderTextColor='white' value={email}/>
                <TextInput onChangeText={(text)=>setMobile(text)}style={{borderWidth:2,borderColor:'white',borderRadius:20,marginLeft:80,width:250,marginTop:30,fontSize:15,color:'white',paddingLeft:20}} placeholder='Mobile No.' placeholderTextColor='white' value={mobile}/>
                <TextInput onChangeText={(text)=>setPassword(text)}style={{borderWidth:2,borderColor:'white',borderRadius:20,marginLeft:80,width:250,marginTop:30,fontSize:15,color:'white',paddingLeft:20}} placeholder='Password' placeholderTextColor='white' value={password}/>
                <TextInput onChangeText={(text)=>setConfirmPassword(text)}style={{borderWidth:2,borderColor:'white',borderRadius:20,marginLeft:80,width:250,marginTop:30,fontSize:15,color:'white',paddingLeft:20}} placeholder='Confirm Password' placeholderTextColor='white' value={confirmPassword}/>
                <TouchableOpacity style={{marginTop:30}}
                onPress={()=>{
{/*if any of the text input is empty or not if not only then run signup */}
                    if(validate()){
                        signUp();
                    }else{
                        Alert.alert("Please Enter correct Data");
                    }
                }}
                >
                        <Text style={{fontSize:30,color:'white',marginLeft:170}}>SignIn</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>{/*if user already have account then go to login page */}
                        <Text style={{color:'#73C2FB',fontSize:15,fontWeight:'bold',marginLeft:110}}>Already have an account? Login</Text>
                    </TouchableOpacity>
            </View>

        </View>
    );
};

export default SignUp;