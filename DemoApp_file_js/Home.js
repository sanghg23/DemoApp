import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';

const Home = ({}) => {
  const navigation = useNavigation();
  const data = [
    {id: '1', title: 'Tra cứu văn bản'},
    {id: '2', title: 'Tra cứu văn bản'},
    {id: '3', title: 'Tra cứu văn bản'},
    {id: '4', title: 'Tra cứu văn bản'},
    {id: '5', title: 'Tra cứu văn bản'},
    {id: '6', title: 'Tra cứu văn bản'},
  ];
  const data2 = [
    {id: '1', title: 'Tra cứu văn bản'},
    {id: '2', title: 'Tra cứu văn bản'},
    {id: '3', title: 'Tra cứu văn bản'},
    {id: '4', title: 'Mục 1'},
    {id: '5', title: 'Mục 2'},
    {id: '6', title: 'Mục 3'},
  ];
  const data3 = [
    {id: '1', title: 'Chủ trì'},
    {id: '2', title: 'Chỉ đạo'},
    {id: '3', title: 'Phối hợp'},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={{color: '#DAA520', fontSize: 16}}>
          <Image
            source={require('../Asset/imgtext1.png')}
            style={styles.imageTex}
          />
          VĂN BẢN ĐẾN
        </Text>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('VanBanDen');
              }}>
              <View style={styles.listItem}>
                <Image
                  source={require('../Asset/muc1.png')}
                  style={styles.image}
                />
                <Text style={{textAlign: 'center'}}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={styles.container1}>
        <Text style={{color: '#006600', fontSize: 16}}>
          <Image
            source={require('../Asset/imgtext2.png')}
            style={styles.imageTex}
          />
          VĂN BẢN ĐI
        </Text>
        <FlatList
          data={data2}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.listItem}>
              <Image
                source={require('../Asset/muc2.png')}
                style={styles.image}
              />
              <Text style={{textAlign: 'center'}}>{item.title}</Text>
            </View>
          )}
        />
      </View>

      <View style={styles.container1}>
        <Text style={{color: '#1B4F93', fontSize: 16}}>
          <Image
            source={require('../Asset/imgtext3.png')}
            style={styles.imageTex}
          />
          CÔNG VIỆC
        </Text>
        <FlatList
          data={data3}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('CongViecChuTri');
              }}>
              <View style={styles.listItem}>
                <Image
                  source={require('../Asset/muc3.png')}
                  style={styles.image}
                />
                <Text style={{textAlign: 'center'}}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    marginTop:10,
    backgroundColor:'white',
    height: 180,
    padding: 10,
    margin: 10,
    borderBottomWidth:1,
    borderBottomColor:'#999999',
  },
  listItem: {
    padding: 8,
    marginRight: 10,
    borderRadius: 8,
    margin: 10,
    justifyContent: 'center',
  },

  image: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#847A78',
    borderRadius:10,
    
  },
  imageTex: {
    width: 20,
    height: 20,
  },
});
