import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/dist/FontAwesome';

import Login from './Login';
import Home from './Home';
import Traodoi from './Traodoi';
import lich from './Lich';
import thongBao from './Thongbao';
import TaiKhoan from './TaiKhoan';
import VBD_list from './List_vbd';
import VBD_searvh from './Search_vbd';
import ChiTiet_VB from './ChiTietVanBan';
import CongViec from './CongviecChuTri';
import ChiTietCV from './ChiTietCongViec';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TraoDoi"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="lich"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="thongBao"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TaiKhoan"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VanBanDen"
          component={VBD_list}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VanBanDen_Search"
          component={VBD_searvh}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChiTietVanBan"
          component={ChiTiet_VB}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CongViecChuTri"
          component={CongViec}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChiTietCongViec"
          component={ChiTietCV}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const TabNavigator = () => {
  return (

      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarStyle: {position: 'absolute'},
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Trang Chủ') {
              iconName = focused ? 'home' : 'home';
              return (
                <Image
                  source={require('../Asset/home.png')}
                  style={{width: 25, height: 25}}
                />
              );
            } else if (route.name === 'Trao Đổi') {
              iconName = focused ? 'exchange' : 'exchange';
              return (
                <Image
                  source={require('../Asset/traodoi.png')}
                  style={{width: 25, height: 25}}
                />
              );
            } else if (route.name === 'Lịch') {
              iconName = focused ? 'calendar' : 'calendar';
              return (
                <Image
                  source={require('../Asset/calendar.png')}
                  style={{width: 25, height: 25}}
                />
              );
            } else if (route.name === 'Thông Báo') {
              iconName = focused ? 'bell' : 'bell';
              return (
                <Image
                  source={require('../Asset/bell.png')}
                  style={{width: 25, height: 25}}
                />
              );
            } else if (route.name === 'Tài Khoản') {
              iconName = focused ? 'user' : 'user';
              return (
                <Image
                  source={require('../Asset/user_tab.png')}
                  style={{width: 25, height: 25}}
                />
              );
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen
          name="Trang Chủ"
          component={Home}
          options={{
            headerTitle: props => (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'black',
                    textAlign: 'center',
                  }}>
                  MẠNG VĂN PHÒNG ĐIỆN TỬ LIÊN THÔNG
                </Text>
              </View>
            ),
            headerRight: () => (
              <Image
                source={require('../Asset/bargach.png')}
                style={{width: 30, height: 30, marginRight: 10}}
              />
            ),
          }}
        />
        <Tab.Screen name="Trao Đổi" component={Traodoi} />
        <Tab.Screen
          name="Lịch"
          component={lich}
          options={{
            headerTitle: props => (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'black',
                    textAlign: 'center',
                  }}>
                  LỊCH CÔNG VIỆC
                </Text>
              </View>
            ),
            headerLeft: () => (
              <Image
                source={require('../Asset/back.png')}
                style={{width: 20, height: 20, marginLeft: 10}}
              />
            ),
            headerRight: () => (
              <Image
                source={require('../Asset/search.png')}
                style={{width: 20, height: 20, marginRight: 20}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Thông Báo"
          component={thongBao}
          options={{
            headerTitle: props => (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'black',
                    textAlign: 'center',
                  }}>
                  THÔNG BÁO
                </Text>
              </View>
            ),
            headerLeft: () => (
              <Image
                source={require('../Asset/back.png')}
                style={{width: 20, height: 20, marginLeft: 10}}
              />
            ),
            headerRight: () => (
              <Image
                source={require('../Asset/search.png')}
                style={{width: 20, height: 20, marginRight: 20}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Tài Khoản"
          component={TaiKhoan}
          options={{
            headerTitle: props => (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'black',
                    textAlign: 'center',
                  }}>
                  THÔNG TIN TÀI KHOẢN
                </Text>
              </View>
            ),
            headerLeft: () => (
              <Image
                source={require('../Asset/back.png')}
                style={{width: 20, height: 20, marginLeft: 10}}
              />
            ),
            headerRight: () => (
              <Image
                source={require('../Asset/search.png')}
                style={{width: 20, height: 20, marginRight: 20}}
              />
            ),
          }}
        />
      </Tab.Navigator>
   
  );
};

export default App;
