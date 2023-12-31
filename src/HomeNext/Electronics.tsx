import { useNavigation } from '@react-navigation/native';
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
import { useDispatch, useSelector } from 'react-redux';
import { addProductToMyCart, deleteMyCartItem, removeMyCartItem } from '../redux/MyCartSlice';
import { decreaseQty, increaseQty } from '../redux/MyProductSlice';
const Electronics = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const myProducts = useSelector(state => state.product);
  const myCartItems = useSelector(state => state.cart);

  console.log('added items', myCartItems);
  const getTotal = () => {
    let total = 0;
    myCartItems.map(item => {
      total = total + item.qty * item.price;
    });
    return total;
  };
  const [input, setInput] = useState('');

  const RenderItem = ({item, index}) => {
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
              {item.qty == 0 ? (
                <TouchableOpacity
                  style={Style.opacity}
                  onPress={() => {
                    dispatch(addProductToMyCart(item));
                    dispatch(increaseQty(item.id));
                  }}>
                  <Text style={{fontSize: 18, color: 'black'}}>
                    Add to cart
                  </Text>
                </TouchableOpacity>
              ) : null}
              {item.qty == 0 ? null : (
                <TouchableOpacity
                  style={Style.plusMinus}
                  onPress={() => {
                    if (item.qty > 1) {
                      dispatch(removeMyCartItem(item));
                      dispatch(decreaseQty(item.id));
                    } else {
                      dispatch(deleteMyCartItem(item.id));
                      dispatch(decreaseQty(item.id));
                    }
                  }}>
                  <Text style={{fontSize: 18, color: 'black'}}>-</Text>
                </TouchableOpacity>
              )}
              {item.qty == 0 ? null : (
                <Text
                  style={{
                    marginTop: 22,
                    marginLeft: 8,
                    alignSelf: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  {item.qty}
                </Text>
              )}
              {item.qty == 0 ? null : (
                <TouchableOpacity
                  style={Style.plusMinus}
                  onPress={() => {
                    dispatch(addProductToMyCart(item));
                    dispatch(increaseQty(item.id));
                  }}>
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
        <FlatList data={myProducts} renderItem={RenderItem} />
      </SafeAreaView>
      {myCartItems.length > 0 ? (
        <View
          style={{
            width: '100%',
            height: 80,
            backgroundColor: 'white',
            position: 'absolute',
            bottom: 0,
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: '50%',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}>
            <Text style={{fontSize: 16, fontWeight: '700', color: 'black'}}>
              {'added items' + '(' + myCartItems.length + ')'}
            </Text>
            <Text style={{marginBottom: 10}}>{'Total:' + getTotal()}</Text>
          </View>
          <View
            style={{
              width: '50%',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}>
            <TouchableOpacity
              style={{
                width: '70%',
                backgroundColor: 'green',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 7,
                height: 40,
                marginBottom: 10,
              }}
              onPress={() => {
                navigation.navigate('MyCart');
              }}>
              <Text style={{color: 'white'}}>View Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
