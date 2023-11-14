import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

const Thongbao = ({navigation}) => {
  const data = [
    {
      id: '1',
      title: 'Xây dựng dự toán các nhiệm vụ năm 2022',
      date: '13/12/2019',
      noidung: 'Xây dựng dự toán năm 2023',
      diadiem: 'Phòng họp 601',
      check: 0,
    },
    {
      id: '2',
      title: 'Xây dựng dự toán các nhiệm vụ năm 2022',
      date: '13/12/2019',
      noidung: 'Xây dựng dự toán năm 2023',
      diadiem: 'Phòng họp 601',
      check: 0,
    },
    {
      id: '3',
      title: 'Xây dựng dự toán các nhiệm vụ năm 2022',
      date: '13/12/2019',
      noidung: 'Xây dựng dự toán năm 2023',
      diadiem: 'Phòng họp 601',
      check: 1,
    },
   
  ];
  return (
    
      <View>
        <View>
          <View>
            <Text style={styles.textContainer}>
              <Image
                source={require('../Asset/bell.png')}
                style={styles.image_item}
              />
              <Text style={styles.text_item}>Thông báo công việc</Text>
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 40,
              }}>
              <Text
                style={{marginLeft: 10, color: 'black', fontWeight: 'bold'}}>
                Tổng số:{' '}
              </Text>
              <View style={{marginLeft: 10}}>
                <Text style={{color: 'red'}}>4 Thông báo</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.textContainer}>
              <Image
                source={require('../Asset/bell.png')}
                style={styles.image_item}
              />
              <Text style={styles.text_item}>Thông báo lịch làm việc</Text>
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 40,
              }}>
              <Text
                style={{marginLeft: 10, color: 'black', fontWeight: 'bold'}}>
                Tổng số:{' '}
              </Text>
              <View style={{marginLeft: 10}}>
                <Text style={{color: 'red'}}>8 Thông báo</Text>
              </View>
            </View>
          </View>
        </View>

        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={{marginLeft: 50}}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginTop: 30,
                }}>
                {item.title}
              </Text>
              <Text style={{color: 'black'}}>
                <Text style={{fontWeight: 'bold'}}>Ngày họp: </Text>
                <Text>{item.date}</Text>
              </Text>
              <Text style={{color: 'black'}}>
                <Text style={{fontWeight: 'bold'}}>Nội dung: </Text>
                <Text>{item.noidung}</Text>
              </Text>
              <Text style={{color: 'black'}}>
                <Text style={{fontWeight: 'bold'}}>Địa điểm: </Text>
                <Text>{item.diadiem}</Text>
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                <Image
                  source={require('../Asset/reaf-removebg-preview.png')}
                  style={{width: 15, height: 15}}
                />
                <Text
                  style={{
                    marginLeft: 10,
                    fontStyle: 'italic',
                    color: item.check === 1 ? '#808080' : '#0B5491',
                    opacity: item.check === 1 ? 0.5 : 1,
                  }}>
                  {item.check === 1 ? 'Đã xem' : 'Chưa xem'}
                </Text>
              </View>
            </View>
          )}
        />

        <View>
          <Text style={styles.textContainer}>
            <Image
              source={require('../Asset/bell.png')}
              style={styles.image_item}
            />
            <Text style={styles.text_item}>Phiên bản mới</Text>
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 40,
            }}>
            <Text style={{marginLeft: 10, color: 'black', fontWeight: 'bold'}}>
              Tổng số:{' '}
            </Text>
            <View style={{marginLeft: 10}}>
              <Text style={{color: 'red'}}>8 Thông báo</Text>
            </View>
          </View>
        </View>
      </View>
    
  );
};

export default Thongbao;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    margin: 10,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d1c2bf',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  image_item: {
    width: 14,
    height: 14,
    marginRight: 5,
  },
  text_item: {
    padding: 50,
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
