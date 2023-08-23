import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
const Header=()=> { 
  const [input, setInput] = useState('');
    return (
        <View style={{margin: 15, width: '100%'}}>
        {/* <View>
          <Text style={Styles.top}> Ecommerce </Text>
        </View> */}
        <View>
          <SafeAreaView>
            <ScrollView horizontal={true}>
              <Image
                source={require('../images/Clothes.jpg')}
                style={Styles.img}
              />
  
              <Image
                source={require('../images/Electronics.jpg')}
                style={Styles.img}
              />
              <Image
                source={require('../images/FootWear.png')}
                style={[Styles.img,{marginRight: 30}]}
              />
            </ScrollView>
          </SafeAreaView>
        </View>
        {/* {<Search data={words} input={input} setInput={setInput}/>} */}
      </View>    
    );
};

export default Header

const Styles=StyleSheet.create({
  img:{
      width:100,
      height: 100,
      padding: 150,
      marginTop: 30,
      marginBottom:30,
      marginLeft: 20,
      borderRadius:20
  },
  searchView:{
      padding: 10,
      flexDirection: 'row',
      width: '100%',
      backgroundColor: '#d9dbda',
      borderRadius: 10,
      alignItems: 'center',
  },
  top:{
    color:'white',
    fontSize:40,
    alignSelf:'center'
  }
})