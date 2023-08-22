import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Header=()=> { 
  const [input, setInput] = useState('');
    return (
        <View style={{margin: 15, width: '100%'}}>
        <View
          style={Styles.searchView}>
          <Icon name="search" size={20} color="black" />
          <TextInput
            value={input}
            onChangeText={text => setInput(text)}
            style={{fontSize: 15}}
            placeholder="Search"
          />
        </View>
        <View
          style={{
            backgroundColor:'#363636'
          }}>
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
  }
})