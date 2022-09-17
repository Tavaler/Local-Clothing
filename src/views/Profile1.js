import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as accountActions from '../actions/account.action';
import {useEffect} from 'react';
import {useState} from 'react';

const Profile = ({navigation}) => {
  // const dispatch = useDispatch();
  // const {user} = useSelector(state => state.account);
  // const {cartItem, total} = useSelector(state => state.cart);
  // const {orders, pagination} = useSelector(state => state.order);

  // const [isOpen, setIsOpen] = React.useState(false);
  // const onClose = () => setIsOpen(false);

  const [token, setToken] = useState();
  useEffect(() => {
    Gettoken();
  }, []);

  const Gettoken = async () => {
    var response = await AsyncStorage.getItem('token');
    setToken(response);
  };

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('user');

    navigation.navigate('LoginScreen');
  };

  // if (!user) return <></>;
  return (
    <View style={styles.container}>
      {/* <View style={{alignItems:"center"}}> */}

      <View style={styles.header}></View>
      <Image
        style={styles.avatar}
        source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}
      />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>
            user
            {/* {user.userFirstname}  {user.userLastname} */}
          </Text>
          <Text style={styles.info}>
            exp@gmail.com
            {/* {user.userEmail} */}
          </Text>
          {/* <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text> */}

          <TouchableOpacity
            style={{
              marginTop: 10,
              height: 45,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 5,
              width: 170,
              borderRadius: 30,
              backgroundColor: '#00BFFF',
            }}
            onPress={() => navigation.navigate('Cart')}>
            <Text>Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('OrderScreen'
          )}
            style={{
              marginTop: 10,
              height: 45,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 5,
              width: 170,
              borderRadius: 30,
              backgroundColor: '#00BFFF',
            }}>
            <Text>Order</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity style={styles.buttonContainer}>
                <Text>Logout</Text> 
              </TouchableOpacity> */}
          {!token && (
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
              <View
                style={{
                  marginTop: 10,
                  height: 45,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 5,
                  width: 170,
                  borderRadius: 30,
                  backgroundColor: '#FFF',
                }}>
                <Text style={{fontSize: 20}}>Login</Text>
              </View>
            </TouchableOpacity>
          )}

          {token && (
            <TouchableOpacity onPress={() => logout()}>
              <View
                style={{
                  marginTop: 10,
                  height: 45,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 5,
                  width: 170,
                  borderRadius: 30,
                  backgroundColor: '#FF0000',
                }}>
                <Text style={{fontSize: 20}}>Logout</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00BFFF',
    height: 150,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },
  // name:{
  //   fontSize:22,
  //   color:"#581845",
  //   fontWeight:'600',
  // },
  body: {
    marginTop: 40,
  },
  // bule:{backgroundColor: "#00BFFF",},
  bodyContent: {
    flex: 0,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: '#581845',
    fontWeight: '600',
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    width: 170,
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
});
