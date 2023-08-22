import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './Header';

const Home = () => {
  const [data, setData] = useState('');
  const [input, setInput] = useState('');
  return (
    <View>
      <Header/>
    </View>
  );
};

export default Home;

const Styles=StyleSheet.create({
    img:{
        width:100,
        height: 100,
        padding: 150,
        marginTop: 30,
        marginBottom:30,
        marginLeft: 10,
        marginRight: 20,
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