import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const Main = () => {
    const navigation=useNavigation();
  return (
    <View>
    <SafeAreaView>
        <ScrollView>
            <Text style={Styles.text}>Deals for Laptops:</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Electronics')}> 
            <View style={[Styles.imageView,{marginTop:20}]}>
                
                <Image source={require('../images/asus.jpg')} style={Styles.image}/>
                <Image source={require('../images/laptop.jpg')} style={[Styles.image,{marginLeft:10}]}/>
            </View>
            <View style={[Styles.imageView,{marginBottom:10,marginTop:10,}]}>
                <Image source={require('../images/acer.jpg')} style={Styles.image}/>
                <Image source={require('../images/random.jpg')} style={[Styles.image,{marginLeft:10}]}/>
            </View>
            </TouchableOpacity>
            <View>
                <Text style={Styles.text}>Deals for EarPhone</Text>
            </View>
            <View style={[Styles.imageView,{marginTop:20}]}>
                <Image source={require('../images/asus.jpg')} style={Styles.image}/>
                <Image source={require('../images/laptop.jpg')} style={[Styles.image,{marginLeft:10}]}/>
            </View>
            <View style={[Styles.imageView,{marginBottom:10,marginTop:10,}]}>
                <Image source={require('../images/acer.jpg')} style={Styles.image}/>
                <Image source={require('../images/random.jpg')} style={[Styles.image,{marginLeft:10}]}/>
            </View>
            <View>
                <Text style={Styles.text}>Deals for EarPhone</Text>
            </View>
            <View style={[Styles.imageView,{marginTop:20}]}>
                <Image source={require('../images/asus.jpg')} style={Styles.image}/>
                <Image source={require('../images/laptop.jpg')} style={[Styles.image,{marginLeft:10}]}/>
            </View>
            <View style={[Styles.imageView,{marginBottom:10,marginTop:10,}]}>
                <Image source={require('../images/acer.jpg')} style={Styles.image}/>
                <Image source={require('../images/random.jpg')} style={[Styles.image,{marginLeft:10}]}/>
            </View>
            <View style={Styles.bottom}>
                <Text style={Styles.bottomText}>About Us</Text>
                <Text style={Styles.bottomText}>Contact Us</Text>
                <Text style={Styles.bottomText}>+91 12345-98760</Text>
                <Text style={Styles.bottomText}>abc@testmail.com</Text>
                <Text style={Styles.bottomText}>Terms and Conditions</Text>

            </View>
        </ScrollView>
    </SafeAreaView>
    </View>
  )
}

export default Main;

const Styles=StyleSheet.create({
    text:{
        fontSize:30,
        color:'#F31559',
        fontWeight:'bold',
    },
    image:{
        width:'50%',
        height:'100%',
    },
    imageView:{
        flexDirection:'row',
        height:150,
    },
    bottom:{
        backgroundColor:'white',
        width:'100%',
        height:110,
    },
    bottomText:{
        fontSize:15,
        color:'black',
        
    }
})