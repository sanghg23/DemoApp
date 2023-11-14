import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const TaiKhoan = ({navigation}) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: '#d1c2bf',
          margin: 20,
          padding: 10,
          borderRadius: 5,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={require('../Asset/user.png')} style={styles.image} />
          <View style={{flexDirection: 'column', marginLeft: 10}}>
            <Text style={{fontSize: 17}}>NGUYỄN VĂN ANH</Text>
            <Text style={{fontSize: 14}}>Đơn vị tập huấn</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#999999',
          backgroundColor: 'white',
          paddingBottom: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            marginLeft: 20,
          }}>
          <Image
            source={require('../Asset/gioitinh.png')}
            style={{width: 15, height: 15}}
          />
          <Text style={{marginLeft: 10, color: 'black'}}>Giới Tính</Text>
          <View style={{marginLeft: 10}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>Nam</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            marginLeft: 20,
          }}>
          <Image
            source={require('../Asset/telephone.png')}
            style={{width: 15, height: 15}}
          />
          <Text style={{marginLeft: 10, color: 'black'}}>Điện thoại</Text>
          <View style={{marginLeft: 10}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>0349988884</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            marginLeft: 20,
          }}>
          <Image
            source={require('../Asset/email.png')}
            style={{width: 15, height: 15}}
          />
          <Text style={{marginLeft: 10, color: 'black'}}>Email</Text>
          <View style={{marginLeft: 10}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>
              trieusangqb03@gmail.com
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            marginLeft: 20,
          }}>
          <Image
            source={require('../Asset/location.png')}
            style={{width: 15, height: 15}}
          />
          <Text style={{marginLeft: 10, color: 'black'}}>Tên đơn vị</Text>
          <View style={{marginLeft: 10}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>
              Đơn vị tập huấn
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            marginLeft: 20,
          }}>
          <Image
            source={require('../Asset/company.png')}
            style={{width: 15, height: 15}}
          />
          <Text style={{marginLeft: 10, color: 'black'}}>Tên phòng ban</Text>
          <View style={{marginLeft: 10}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>Văn Phòng</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#999999',
          backgroundColor: 'white',
          paddingBottom: 20,
          marginTop:30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            justifyContent: 'space-between',
            marginTop: 50,
            marginLeft: 20,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../Asset/info.png')}
              style={{width: 15, height: 15}}
            />
            <Text style={{marginLeft: 10, color: 'black'}}>
              Thay đổi thông tin
            </Text>
          </View>
          <Image
            source={require('../Asset/next.png')}
            style={{width: 14, height: 14, marginRight: 20}}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            marginLeft: 20,
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../Asset/padlock.png')}
              style={{width: 15, height: 15}}
            />
            <Text style={{marginLeft: 10, color: 'black'}}>Đổi mật khẩu</Text>
          </View>
          <Image
            source={require('../Asset/next.png')}
            style={{width: 14, height: 14, marginRight: 20}}
          />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20,
              marginLeft: 20,
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../Asset/left-arrow.png')}
                style={{width: 15, height: 15}}
              />
              <Text style={{marginLeft: 10, color: 'black'}}>Đăng xuất</Text>
            </View>
            <Image
              source={require('../Asset/next.png')}
              style={{width: 15, height: 15, marginRight: 20}}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaiKhoan;

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});
