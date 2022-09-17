// import { Text, View } from 'react-native'
// import React, { Component } from 'react'

// export default class HomeScreen extends Component {
//   render() {
//     return (
//       <View>
//         <Text>HomeScreen</Text>
//       </View>
//     )
//   }
// }


// import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { GetProducts } from '../service/product.service'
// import { BASE_URL } from '../../helper/axios'
// import {useSelector, useDispatch} from 'react-redux';

import NavigationBar from 'react-native-navbar';
import { color } from 'native-base/lib/typescript/theme/styled-system';


const HomeScreen1 = ({ navigation }) => {
  { navigation }

  const [data, setdata] = useState()

  // const {categoryIndex, categories, products} = useSelector(
  //   state => state.product,
  // );


  useEffect(() => {
    feathData();
  }, [])

  const feathData = async () => {
    var response = await GetProducts(
      //  {currentPage: 1, pageSize: 99}
    );
    setdata(response.data);
    console.log("Product" + JSON.stringify(response, null, 2))
  }

  const rightButtonConfig = {
    title: 'Next',
    handler: () => alert('hello!'),
  };
  
  const titleConfig = {
    title: 'สินค้า',
    
    
    // color: "#F39C12"
  };

  addProductToCart = () => {
    Alert.alert('Success', 'The product has been added to your cart')
  }


  return (
    <View style={styles.container}>
      
      <NavigationBar
        style={{backgroundColor:"#3498DB"}}
        title={titleConfig}
        rightButton={rightButtonConfig}
      />
      
      <FlatList style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={data}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => {
          return item.productId;
        }}
        ItemSeparatorComponent={() => {
          return (
            <View style={styles.separator} />
          )
        }}
        renderItem={(post) => {
          const item = post.item;
          return (
            <View style={styles.card}>

              <View style={styles.cardHeader}>
                <View>
                  <Text style={styles.title}>{item.productName}</Text>
                  <Text style={styles.price}>{item.productPrice}</Text>
                  {/* <Text style={styles.price}>{item.productImage}</Text> */}

                </View>
              </View>

              <Image style={styles.cardImage} source={{ uri: item.productImage }} />

              <View style={styles.cardFooter}>
                <View style={styles.socialBarContainer}>
                  <View style={styles.socialBarSection}>
                    <TouchableOpacity style={styles.socialBarButton}
                      onPress={() => navigation.navigate("ProductDetail", { id: item.productId })}
                    //   onPress={() => this.addProductToCart()}
                    >
                      <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/nolan/96/3498db/add-shopping-cart.png' }} />
                      <Text style={[styles.socialBarLabel, styles.buyNow]}>Buy Now</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.socialBarSection}>
                    <TouchableOpacity style={styles.socialBarButton}>
                      <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/color/50/000000/hearts.png' }} />
                      <Text style={styles.socialBarLabel}>25</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          )
        }} />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: "#E6E6E6",
  },
  listContainer: {
    alignItems: 'center'
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor: "white",
    flexBasis: '47%',
    marginHorizontal: 5,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title: {
    fontSize: 18,
    flex: 1,
  },
  price: {
    fontSize: 16,
    color: "green",
    marginTop: 5
  },
  buyNow: {
    color: "purple",
  },
  icon: {
    width: 25,
    height: 25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default HomeScreen1;