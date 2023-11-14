// Login.js
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Login = ({}) => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'blue' }}>
    <ImageBackground
      source={require('../Asset/gd.jpg')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.container_img}>
          <Image source={require('../Asset/acout2.png')} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Tên đăng nhập"
            placeholderTextColor="white"
            onChangeText={text => setUsername(text)}
          />
        </View>

        <View style={styles.container_img}>
          <Image source={require('../Asset/lock.png')} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Mật khẩu"
            placeholderTextColor="white"
            secureTextEntry
            onChangeText={text => setPassword(text)}
          />
        </View>

        <TouchableOpacity
          title="Đăng nhập"
          onPress={handleLogin}
          style={styles.button}>
          <Text style={styles.textButton}>Đăng Nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogin} style={styles.button_dk}>
          <Text style={styles.textButton_dk}>Đăng Ký</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
    </SafeAreaView>
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
    alignItems: 'center',
    justifyContent: 'center',
    margin: 70,
    marginTop: 300,
  },
  container_img: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: 'white',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    padding: 0,
    fontWeight: 'bold',
  
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#fea901',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginTop: 50,
  },
  button_dk: {
    width: '100%',
    height: 40,
    backgroundColor: 'rgba(96, 96, 96, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginTop: 20,
  
  },
  textButton: {
    fontSize: 20,
    color: '#93050f',
    fontWeight: 'bold',
  },
  textButton_dk: {
    fontSize: 18,
    color: 'white',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});
