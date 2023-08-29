import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Header from './Header';
import HomeMain from './HomeMain';

const Home = () => {
  const [data, setData] = useState('');
  const [input, setInput] = useState('');
  return (
    <View style={{backgroundColor:'#A78295'}}>
      <SafeAreaView>
        <ScrollView>
          <Header/>
          <HomeMain/>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;

const Styles=StyleSheet.create({})