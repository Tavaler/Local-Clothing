import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {VStack, Badge} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
/////////////////////ARM

import {COLORS} from '../constants';
import Shadows from '../helper/shadowStyle';
import {PrimaryButton} from '../components/Button';

import {IntMoney} from '../helper/functionService';

import useCartScreen from '../logic/useCartScreen';

const CartScreen = ({navigation}) => {
  const {user, cartItem, total, getCartItem, ItemDelete, ItemRemove, ItemPlus} =
    useCartScreen();

  useEffect(() => {
    navigation.setOptions({headerShown: false});
    if (user) getCartItem();
    else navigation.navigate('SignIn');
  }, []);

  const CartCard = ({item}) => {
    return (
      <View style={styles.cartCard}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() =>
            navigation.navigate('ProductDetail', {id: item.productId})
          }>
          <Image
            source={{
              uri: item.productImage
                ? item.productImage
                : 'https://fy.lnwfile.com/_/fy/_raw/zy/ze/4u.jpg',
            }}
            style={{height: 80, width: 80, borderRadius: 10}}
          />
        </TouchableOpacity>
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{fontSize: 16}} numberOfLines={1} ellipsizeMode="tail">
            {item.productName}
          </Text>
          <Text style={{fontSize: 13, color: COLORS.grey}}>
            {item.productCategoryName}, {IntMoney(item.productPrice)}
          </Text>
          <Text style={{fontSize: 17}}>{IntMoney(item.sumAmountPrice)}</Text>
        </View>
        <View style={{marginRight: 20, alignItems: 'center'}}>
          <Text style={{fontSize: 18}}>{item.amount}</Text>
          <View style={styles.actionBtn}>
            <TouchableOpacity onPress={() => ItemRemove(item.id)}>
              <Icon name="remove" size={25} color={COLORS.white} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => ItemPlus(item.id)}>
              <Icon name="add" size={25} color={COLORS.white} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => ItemDelete(item.id)}>
              <Icon name="delete" size={25} color={COLORS.white} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  if (!user) return <></>;
  return (
    <SafeAreaView style={{backgroundColor: COLORS.light, flex: 1}}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <View style={[styles.headers, Shadows(3)]}>
        <TouchableOpacity style={styles.headerBtns} onPress={navigation.goBack}>
          <Icon name="chevron-left" size={25} />
        </TouchableOpacity>
        <Text style={{fontSize: 18}}>ตะกร้า</Text>
        <TouchableOpacity
          style={styles.headerBtns}
          onPress={() => navigation.navigate('Cart')}>
          <VStack>
            {cartItem.length > 0 && (
              <Badge // bg="red.400"
                colorScheme="danger"
                rounded="full"
                mb={-4}
                mr={-4}
                zIndex={1}
                variant="solid"
                alignSelf="flex-end"
                _text={{
                  fontSize: 12,
                }}>
                {cartItem.length}
              </Badge>
            )}
            <Icon name="shopping-cart" size={28} color={COLORS.primary} />
          </VStack>
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={cartItem}
        renderItem={({item}) => <CartCard item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        ListFooterComponent={() => <></>}
      />
      <View
        style={{
          backgroundColor: COLORS.white,
          marginTop: 4,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          paddingHorizontal: 16,
          paddingBottom: 8,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 15,
          }}>
          <Text style={{fontSize: 18}}>ราคารวม</Text>
          <Text style={{fontSize: 18}}>฿{IntMoney(total)}</Text>
        </View>
        <View style={{marginHorizontal: 4}}>
          <PrimaryButton
            title="ยืนยันสั่งสินค้า"
            onPress={() => {
              if (cartItem && cartItem.length > 0)
                navigation.navigate('ConfirmOrder');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  headers: {
    paddingVertical: 5,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  headerBtns: {
    height: 50,
    width: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default CartScreen;
