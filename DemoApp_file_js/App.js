
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './Login';
import Home from './Home';
import Traodoi from './Traodoi';
import lich from './Lich';
import thongBao from './Thongbao';
import TaiKhoan from './TaiKhoan';
import VBD_list from './List_vbd';
import VBD_searvh from './Search_vbd';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TraoDoi"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="lich"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="thongBao"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TaiKhoan"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VanBanDen"
          component={VBD_list}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VanBanDen_Search"
          component={VBD_searvh}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Trang chủ"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Trao Đổi" component={Traodoi} />
      <Tab.Screen name="Lịch" component={lich} />
      <Tab.Screen name="Thông Báo" component={thongBao} />
      <Tab.Screen name="Tài Khoản" component={TaiKhoan} />
    </Tab.Navigator>
  );
};

export default App;
