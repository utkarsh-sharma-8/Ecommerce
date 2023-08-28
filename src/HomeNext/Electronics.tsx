import React, { useState } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const data = [
  {
    id: 1,
    name: 'Asus Tough Gaming',
    price: 60000,
    description:
      'Geared for serious gaming and real-world durability, the TUF Gaming A15 is a fully-loaded Windows 10 gaming laptop that can carry you to victory. Powered by the latest AMD Ryzen 7 CPU and GeForce GTX 1650 Ti GPU, action-packed gameplay is fast, fluid, and fully saturates speedy IPS-level displays 144Hz.',
    image:
      'https://th.bing.com/th/id/OIP.EkV5JL1J_14th8ppMMtrnwEsDi?pid=ImgDet&rs=1',
    qty: 0,
  },
  {
    id: 2,
    name: 'Asus Tough Gaming',
    price: 60000,
    description:
      'Geared for serious gaming and real-world durability, the TUF Gaming A15 is a fully-loaded Windows 10 gaming laptop that can carry you to victory. Powered by the latest AMD Ryzen 7 CPU and GeForce GTX 1650 Ti GPU, action-packed gameplay is fast, fluid, and fully saturates speedy IPS-level displays 144Hz.',
    image:
      'https://th.bing.com/th/id/OIP.EkV5JL1J_14th8ppMMtrnwEsDi?pid=ImgDet&rs=1',
    qty: 0,
  },
  {
    id: 3,
    name: 'Asus Tough Gaming',
    price: 60000,
    description:
      'Geared for serious gaming and real-world durability, the TUF Gaming A15 is a fully-loaded Windows 10 gaming laptop that can carry you to victory. Powered by the latest AMD Ryzen 7 CPU and GeForce GTX 1650 Ti GPU, action-packed gameplay is fast, fluid, and fully saturates speedy IPS-level displays 144Hz.',
    image:
      'https://th.bing.com/th/id/OIP.EkV5JL1J_14th8ppMMtrnwEsDi?pid=ImgDet&rs=1',
    qty: 0,
  },
  {
    id: 4,
    name: 'Asus Tough Gaming',
    price: 60000,
    description:
      'Geared for serious gaming and real-world durability, the TUF Gaming A15 is a fully-loaded Windows 10 gaming laptop that can carry you to victory. Powered by the latest AMD Ryzen 7 CPU and GeForce GTX 1650 Ti GPU, action-packed gameplay is fast, fluid, and fully saturates speedy IPS-level displays 144Hz.',
    image:
      'https://th.bing.com/th/id/OIP.EkV5JL1J_14th8ppMMtrnwEsDi?pid=ImgDet&rs=1',
    qty: 0,
  },
  {
    id: 5,
    name: 'Asus Tough Gaming',
    price: 60000,
    description:
      'Geared for serious gaming and real-world durability, the TUF Gaming A15 is a fully-loaded Windows 10 gaming laptop that can carry you to victory. Powered by the latest AMD Ryzen 7 CPU and GeForce GTX 1650 Ti GPU, action-packed gameplay is fast, fluid, and fully saturates speedy IPS-level displays 144Hz.',
    image:
      'https://th.bing.com/th/id/OIP.EkV5JL1J_14th8ppMMtrnwEsDi?pid=ImgDet&rs=1',
    qty: 0,
  },
  {
    id: 6,
    name: 'Asus Tough Gaming',
    price: 60000,
    description:
      'Geared for serious gaming and real-world durability, the TUF Gaming A15 is a fully-loaded Windows 10 gaming laptop that can carry you to victory. Powered by the latest AMD Ryzen 7 CPU and GeForce GTX 1650 Ti GPU, action-packed gameplay is fast, fluid, and fully saturates speedy IPS-level displays 144Hz.',
    image:
      'https://th.bing.com/th/id/OIP.EkV5JL1J_14th8ppMMtrnwEsDi?pid=ImgDet&rs=1',
    qty: 0,
  },
  {
    id: 7,
    name: 'Asus Tough Gaming',
    price: 60000,
    description:
      'Geared for serious gaming and real-world durability, the TUF Gaming A15 is a fully-loaded Windows 10 gaming laptop that can carry you to victory. Powered by the latest AMD Ryzen 7 CPU and GeForce GTX 1650 Ti GPU, action-packed gameplay is fast, fluid, and fully saturates speedy IPS-level displays 144Hz.',
    image:
      'https://th.bing.com/th/id/OIP.EkV5JL1J_14th8ppMMtrnwEsDi?pid=ImgDet&rs=1',
    qty: 0,
  },
  {
    id: 8,
    name: 'Asus Tough Gaming',
    price: 60000,
    description:
      'Geared for serious gaming and real-world durability, the TUF Gaming A15 is a fully-loaded Windows 10 gaming laptop that can carry you to victory. Powered by the latest AMD Ryzen 7 CPU and GeForce GTX 1650 Ti GPU, action-packed gameplay is fast, fluid, and fully saturates speedy IPS-level displays 144Hz.',
    image:
      'https://th.bing.com/th/id/OIP.EkV5JL1J_14th8ppMMtrnwEsDi?pid=ImgDet&rs=1',
    qty: 0,
  },
  {
    id: 9,
    name: 'Asus Tough Gaming',
    price: 60000,
    description:
      'Geared for serious gaming and real-world durability, the TUF Gaming A15 is a fully-loaded Windows 10 gaming laptop that can carry you to victory. Powered by the latest AMD Ryzen 7 CPU and GeForce GTX 1650 Ti GPU, action-packed gameplay is fast, fluid, and fully saturates speedy IPS-level displays 144Hz.',
    image:
      'https://th.bing.com/th/id/OIP.EkV5JL1J_14th8ppMMtrnwEsDi?pid=ImgDet&rs=1',
    qty: 0,
  },
  {
    id: 10,
    name: 'Asus Tough Gaming',
    price: 60000,
    description:
      'Geared for serious gaming and real-world durability, the TUF Gaming A15 is a fully-loaded Windows 10 gaming laptop that can carry you to victory. Powered by the latest AMD Ryzen 7 CPU and GeForce GTX 1650 Ti GPU, action-packed gameplay is fast, fluid, and fully saturates speedy IPS-level displays 144Hz.',
    image:
      'https://th.bing.com/th/id/OIP.EkV5JL1J_14th8ppMMtrnwEsDi?pid=ImgDet&rs=1',
    qty: 0,
  },
];
const Electronics = () => {
  const [input, setInput] = useState('');

  const RenderItem = ({item}) => {
    return (
      <View>
        <View style={Style.imageText}>
          <Image source={{uri: item.image}} style={Style.image} />
          <View style={{width: 250, marginTop: 60}}>
            <Text style={Style.name}>{item.name}</Text>
            <Text style={Style.price}>Rs.{item.price}</Text>
            <Text style={Style.description}>
              {item.description.substring(0, 100) + '...'}
            </Text>
            <View style={{flexDirection: 'row'}}>
              {item.qty==0?( <TouchableOpacity
                style={Style.opacity}>
                <Text style={{fontSize: 18, color: 'black'}}>Add to cart</Text>
              </TouchableOpacity>):null
              }
              {item.qty == 0 ? null : (
                <TouchableOpacity style={Style.plusMinus}>
                <Text style={{fontSize: 18, color: 'black'}}>-</Text>
                </TouchableOpacity>
              )}
              {item.qty == 0 ? null : (
              <Text style={{marginTop: 22,marginLeft:8,alignSelf:'center',fontSize:20,fontWeight:'bold'}}>{0}</Text>
              )}
              {item.qty == 0 ? null : (
              <TouchableOpacity style={Style.plusMinus}>
                <Text style={{fontSize: 18, color: 'black'}}>+</Text>
              </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={{backgroundColor: '#A78295'}}>
      <View>
        <Text>Welcome</Text>
      </View>
      <SafeAreaView>
        <FlatList data={data} renderItem={RenderItem} />
      </SafeAreaView>
    </View>
  );
};

export default Electronics;

const Style = StyleSheet.create({
  name: {
    fontSize: 23,
    color: 'black',
  },
  price: {
    fontSize: 20,
    color: 'black',
  },
  description: {
    color: 'black',
  },
  imageText: {
    flexDirection: 'row',
    height: 280,
  },
  image: {
    width: '40%',
    height: '50%',
    alignSelf: 'center',
  },
  opacity: {
    backgroundColor: 'yellow',
    borderRadius: 5,
    width: 100,
    marginTop: 20,
    padding: 4,
    flexDirection: 'row',
  },
  plusMinus: {
    width: 25,
    backgroundColor: 'yellow',
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 8,
    padding: 4,
    alignItems:'center',
    justifyContent:'center',
  },
});
