import { 
  View, 
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated ,
  Keyboard,
  Alert,
  ImageBackground
} from 'react-native'
import React, {useEffect,useState} from 'react'
import { APILogin,GetByToken } from './service/user.service'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function LoginScreen(props) {

  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")

  // const bgimage = {require('../src/imgs/img/background12.png')}

  const onLogin =async()=>{
    // alert(UserPassword)
   var response = await APILogin(userEmail,userPassword)
  //  console.log(response)
      console.log("Login"+JSON.stringify(response,null,2))
      // console.log(response)
   if(response.data.statusCode==200) {
    setStateUser(response.token)
    alert(response.data.message)
    props.navigation.navigate("TabScreens")
   }
  //  if(response.statusCode=="400")
  else
   alert(response.data.message)

   
   
  };

  const setStateUser = async token =>{
    await AsyncStorage.setItem('token',token);
    var response =await GetByToken(token);
    if(response.statusCode == 200){
      AsyncStorage.setItem("token" ,token);
      AsyncStorage.setItem("user" ,JSON.stringify(response.data))
    }
  }
  
  const   [offset] = useState(new Animated.ValueXY({x:0,y: 80}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x:130, y: 155}));

  useEffect(()=>{
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);
    props.navigation.setOptions({headerShown:false})

    Animated.parallel([
      Animated.spring(offset.y,{
        toValue: 0,
        speed: 4,
        bounciness: 20
      }),
      Animated.timing(opacity,{
        toValue:1,
        duration: 200,
      })
    ]).start();
   
  },[]);
 function keyboardDidHide (){
   Animated.parallel([
     Animated.timing(logo.x,{
       toValue:120,
       duration:100,
     }),
     Animated.timing(logo.y,{
       toValue:65,
       duration:100,
     }),
   ]).start();

 }
 function keyboardDidShow (){
  Animated.parallel([
    Animated.timing(logo.x,{
      toValue:130,
      duration:100,
    }),
    Animated.timing(logo.y,{
      toValue:155,
      duration:100,
    }),
  ]).start();
 }
  
  return (
    <KeyboardAvoidingView style={styles.background}>
      {/* <View style={styles.containerLogo}> */}
      
      <Image style={styles.bgImage} source={require('./imgs/img/background12.png')}/>
      {/* </View> */}
      <View style={styles.containerLogo}>
      {/* <Image
          style={styles.banner}
          resizeMode="center"
          source={require('./imgs/8o26mygd.png')}
        /> */}
        </View>
      <Animated.View
       style={[
         styles.container,
         {
          opacity: opacity,
           transform:[
           {translateY: offset.y}
         ]
        }
        ]}
       
       >
      <TextInput
      style={styles.input}
        placeholder='userEmail'
        autoCorrect={false}
        onChangeText={(e)=>{
          setUserEmail(e)
        }}
      />


       <TextInput
        style={styles.input}
        placeholder='userPassword'
        autoCorrect={false}
        secureTextEntry={true} 

        onChangeText={(e)=>{
          setUserPassword(e)
        }}
      />
      

      <TouchableOpacity 
       onPress={()=>onLogin()} 
       style={styles.btnSubmit}>
        <Text
       
        style={styles.submitText}>
          Login
        </Text>
      </TouchableOpacity>
      <Text></Text>

      <TouchableOpacity style={styles.btnRegister}>
        <Text onPress={()=>{
        props.navigation.navigate("RegisterScreen")
      }} style={styles.registerText}>
        Create a new account. 
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnRegister}>
        <Text onPress={()=>{
        props.navigation.navigate("Blog")
      }} style={styles.registerText}>
        Home
        </Text>
      </TouchableOpacity>
      </Animated.View>
      
      {/* </ImageBackground> */}  
    </KeyboardAvoidingView>
    
  )

}

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#FF6800'
  },
  containerLogo:{
    flex:1,
    justifyContent:'center'
  },
  bgImage:{
    flex: 1,
    // resizeMode:'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  
  },
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:'90%',
    paddingBottom:50
  },
  input:{
    backgroundColor:'#fff',
    width:'90%',
    marginBottom:15,
    color:'#222',
    fontSize:17,
    borderRadius:7,
    padding:10
  },
  btnSubmit:{
    backgroundColor:'#000000c0',
    width:'90%',
    height:45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:7
  },
  submitText:{
    color:'#FFF',
    fontSize:18
  },
  btnRegister:{
    marginTop:10
  },
  registerText:{
    color:'#FFF'
  }
})

{/* <Button title='Register' onPress={()=>{
        props.navigation.navigate("Register")
      }} /> */}