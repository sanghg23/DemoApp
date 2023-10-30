// Login.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Image, } from 'react-native';
import { useNavigation } from "@react-navigation/native";


const Login = ({ }) => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <ImageBackground
      source={require("../Asset/gd.jpg")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>

        <View style={styles.container_img} >
          <Image source={require('../Asset/acout2.png')} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Tên đăng nhập"
            placeholderTextColor="white" 
            onChangeText={(text) => setUsername(text)}
          />
        </View>

        <View style={styles.container_img} >
          <Image source={require('../Asset/lock.png')} style={styles.icon} />
          <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          placeholderTextColor="white" 
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        </View>

        
        <TouchableOpacity
          title="Đăng nhập"
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.textButton}>Đăng Nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity title="Đăng ký" >
          <Text style ={{marginTop:30,}}> Đăng Ký</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Login;
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%', 
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin:70,
    marginTop:300,

  },
  container_img: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,

  },
  input: {
    flex: 1, 
    padding: 0,
    fontWeight: 'bold', 
    borderBottomWidth: 1, 
    borderColor: 'color_of_your_choice',
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: "#339966",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    marginTop:50,
 
  },
  textButton: {
    fontSize: 20,
    color: "white",
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});
