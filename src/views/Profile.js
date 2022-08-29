// import React from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   SafeAreaView,
//   StatusBar,
//   Dimensions,
// } from 'react-native';
// import {Spinner, AlertDialog, Button} from 'native-base';
// import {useSelector, useDispatch} from 'react-redux';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// import * as cartItemActions from '../actions/cart.action';
// import * as accountActions from '../actions/account.action';
// // import {COLORS} from '../constants/index';
// import Shadows from '../../helper/shadowStyle';

// const screenWidth = Dimensions.get('screen').width;

// const ProfileScreen = ({navigation}) => {
//   const dispatch = useDispatch();
//   const {user} = useSelector(state => state.account);
//   const {cartItem, total} = useSelector(state => state.cart);
//   const {orders, pagination} = useSelector(state => state.order);

//   const [isOpen, setIsOpen] = React.useState(false);
//   const onClose = () => setIsOpen(false);

//   const onLogout = async () => {
//     dispatch(accountActions.clear());
//     dispatch(cartItemActions.clear());
//     await AsyncStorage.removeItem('token');
//     navigation.navigate('Home');
//   };

//   const DialogContent = () => {
//     return (
//       <AlertDialog isOpen={isOpen} onClose={onClose}>
//         <AlertDialog.Content>
//           <AlertDialog.CloseButton />
//           <AlertDialog.Header>
//             <Text>ยืนยันออกจากระบบ</Text>
//           </AlertDialog.Header>
//           <AlertDialog.Footer>
//             <Button.Group space={2}>
//               <Button
//                 variant="unstyled"
//                 colorScheme="coolGray"
//                 onPress={onClose}>
//                 <Text>ยกเลิก</Text>
//               </Button>
//               <Button colorScheme="danger" onPress={onLogout}>
//                 <Text>ออกจากระบบ</Text>
//               </Button>
//             </Button.Group>
//           </AlertDialog.Footer>
//         </AlertDialog.Content>
//       </AlertDialog>
//     );
//   };

//   if (!user) return <Spinner size="sm" />;
//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
//       <DialogContent />
//       <StatusBar backgroundColor='#fff' barStyle="dark-content" />
//       <ScrollView
//         style={styles.container}
//         contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
//         showsVerticalScrollIndicator={false}>
//         <Image
//           style={styles.userImg}
//           source={{
//             uri:
//               user && user.profileImage
//                 ? user.profileImage
//                 : 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',
//           }}
//         />
//         <Text style={styles.userName}>{user.name}</Text>
//         <Text style={styles.aboutUser}>{user.username}</Text>

//         <View style={styles.userInfoWrapper}>
//           <TouchableOpacity
//             activeOpacity={0.7}
//             onPress={() => navigation.navigate('Cart')}
//             style={styles.userInfoItem}>
//             <Text style={styles.userInfoTitle}>{cartItem.length}</Text>
//             <Text style={styles.userInfoSubTitle}>ตะกร้าสินค้า</Text>
//           </TouchableOpacity>
//           <View style={styles.userInfoItem}>
//             <Text style={styles.userInfoTitle}>
//               {orders ? pagination.count : 0}
//             </Text>
//             <Text style={styles.userInfoSubTitle}>ใบสั่งซื้อ</Text>
//           </View>
//           <View style={styles.userInfoItem}>
//             <Text style={styles.userInfoTitle}>0</Text>
//             <Text style={styles.userInfoSubTitle}>รายการรีวิว</Text>
//           </View>
//         </View>

//         <View style={{marginHorizontal: 16, flex: 1, flexDirection: 'column'}}>
//           {user.roleId == '2' && (
//             <ButtonClick
//               title="แอดมิน"
//               onClick={() => navigation.navigate('WebAdmin')}
//             />
//           )}
//           <ButtonClick
//             title="แก้ไข"
//             onClick={() => navigation.navigate('EditProfile', {id: user.id})}
//           />
//           <ButtonClick
//             title="คำสั่งซื้อ"
//             onClick={() => navigation.navigate('Order')}
//           />
//           <ButtonClick
//             title="ที่อยู่"
//             onClick={() => navigation.navigate('Address')}
//           />
//           <ButtonClick title="ออกจากระบบ" onClick={() => setIsOpen(!isOpen)} />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default ProfileScreen;

// const ButtonClick = ({title, onClick}) => (
//   <TouchableOpacity
//     style={[
//       {
//         width: screenWidth - 48,
//         height: 48,
//         borderRadius: 8,
//         backgroundColor: '#fff',
//         borderColor: '#FFB625',
//         borderWidth: 2,
//         justifyContent: 'center',
//         marginBottom: 12,
//       },
//       Shadows(3),
//     ]}
//     onPress={onClick}
//     activeOpacity={0.7}>
//     <Text style={{paddingHorizontal: 32, color: '#FFB625'}}>{title}</Text>
//   </TouchableOpacity>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   userImg: {
//     height: 150,
//     width: 150,
//     borderRadius: 75,
//   },
//   userName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   aboutUser: {
//     fontSize: 12,
//     fontWeight: '600',
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   userBtnWrapper: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     width: '100%',
//     marginBottom: 10,
//   },
//   userBtn: {
//     borderColor: '#FFB625',
//     borderWidth: 2,
//     borderRadius: 3,
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     marginHorizontal: 5,
//   },
//   userBtnTxt: {
//     color: '#FFB625',
//   },
//   userInfoWrapper: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//     marginVertical: 20,
//   },
//   userInfoItem: {
//     justifyContent: 'center',
//   },
//   userInfoTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 5,
//     textAlign: 'center',
//   },
//   userInfoSubTitle: {
//     fontSize: 12,
//     color: '#666',
//     textAlign: 'center',
//   },
// });
