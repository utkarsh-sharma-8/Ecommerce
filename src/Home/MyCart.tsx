import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProductToMyCart,
  deleteMyCartItem,
  removeMyCartItem,
} from '../redux/MyCartSlice';
import { decreaseQty, increaseQty } from '../redux/MyProductSlice';

const MyCart = () => {
  const myCartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigation = useNavigation();
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
    <View style={{flex: 1}}>
      <View style={{backgroundColor: '#A78295'}}>
        <View>
          <Text>Welcome</Text>
        </View>
        <SafeAreaView>
          <FlatList data={myCartItems} renderItem={RenderItem} />
        </SafeAreaView>
      </View>
    </View>
  );
};

export default MyCart;

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
