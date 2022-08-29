import React, {useEffect,Component,useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
} from 'react-native';
import { GetById } from '../service/product.service';
import { BASE_URL } from '../../helper/axios'

  const ProductDetail = ({route}) => {
    // const {getCartItem} = useCartScreen();

  const {id} = route.params;
  // const {user} = useSelector(state => state.account);
  const [data, setData] = useState();
  // const [nums, setNums] = useState(1);

  useEffect(() => {
    // navigation.setOptions({headerShown: false});
    fetchProductDetails();
  }, []);

   clickEventListener = () => {
    Alert.alert("Success", "Product has beed added to cart")
  }

  const fetchProductDetails = async () => {
    var response = await GetById(id);
   setData(response); 
    console.log("Detail"+JSON.stringify(response,null,2))

    
  };
  // const renderItem = ({item}) => {
  if(!data) return <Text> </Text>
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{alignItems:'center', marginHorizontal:30}}>
            <Image style={styles.productImg} source={{uri:"http://10.103.0.15/cs63/s15/Local/Backend/images/"+data.productImg[0].productImgName}}/>
          
          <View style={styles.card}>
          <Text style={styles.name}>{data.productName}</Text>
            
            <Text style={styles.price}>สินค้าจาก :<Text style={styles.text_n}>{data.categoryName}</Text></Text>
          
            <Text style={styles.cardTittle}>รายละเอียด</Text>
            <Text style={styles.text_m}>รหัสสินค้า :<Text style={styles.text_n}>{data.productId}</Text></Text>   

            <Text>{data.productDetail}</Text>   
            <View style={styles.price}>
            <Text style={styles.price}>ราคา :<Text style={styles.text_n}>{data.productPrice}</Text></Text>
            </View>
          <View style={styles.price}>
          <Text style={styles.price}>คลัง :<Text style={styles.text_n}>{data.productStock}</Text></Text>
            </View>
          </View>
            {/* <Text style={styles.description}>
              รายละเอียด :
             {data.productDetail}
          
              
            </Text> */}
          </View>
          
          

          <View style={styles.addToCarContainer}>
            <TouchableOpacity style={styles.shareButton} onPress={()=> this.clickEventListener()}>
              <Text style={styles.shareButtonText}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
    // };
}

export default ProductDetail;

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  productImg:{
    width:200,
    height:200,
  },
  name:{
    fontSize:28,
    color:"#696969",
    fontWeight:'bold'
  },
  text_n:{
    fontSize:18,
    color:"#808080",
    fontWeight:'bold'
  },
  
  text_d:{
    
    
    marginBottom:5,
    fontSize:18,
    color:"#696969",
    // fontWeight:'bold'
  },
  
  text_m:{
    fontSize:18,
    color:"#696969",
    fontWeight:'bold'
  },
  price:{
    marginTop:10,
    fontSize:18,
    color:"green",
    fontWeight:'bold'
  },
  description:{
    textAlign:'center',
    marginTop:10,
    color:"#696969",
  },
  star:{
    width:40,
    height:40,
  },
  btnColor: {
    height:30,
    width:30,
    borderRadius:30,
    marginHorizontal:3
  },
  btnSize: {
    height:40,
    width:40,
    borderRadius:40,
    borderColor:'#778899',
    borderWidth:1,
    marginHorizontal:3,
    backgroundColor:'white',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starContainer:{
    justifyContent:'center',
    marginHorizontal:30,
    flexDirection:'row',
    marginTop:20
  },
  contentColors:{
    justifyContent:'center',
    marginHorizontal:30,
    flexDirection:'row',
    marginTop:20
  },
  contentSize:{
    justifyContent:'center',
    marginHorizontal:30,
    flexDirection:'row',
    marginTop:20
  },
  separator:{
    height:2,
    backgroundColor:"#eeeeee",
    marginTop:20,
    marginHorizontal:30
  },
  shareButton: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  shareButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  },
  addToCarContainer:{
    marginHorizontal:30
  },
  cardTittle:{
    color:"#696969",
    fontSize:22,
    marginBottom:5,
  },
  // avatar:{
  //   width:150,
  //   height:150,
  // },
  card:{
    backgroundColor: "#FFFFFF",
    borderRadius:10,
    padding:10,
    height:"auto",
    width:400,
    marginTop:10,
  },
});