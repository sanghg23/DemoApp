import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const ChiTietVanBan = ({navigation}) => {
  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.navContainer}>
        <TouchableOpacity style={styles.navItem_back} onPress={handleBackPress}>
          <Image
            source={require('../Asset/back.png')}
            style={{width: 20, height: 20}}
          />
        </TouchableOpacity>
        <Text style={styles.navText}>CHI TIẾT VĂN BẢN</Text>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('../Asset/search.png')}
            style={{width: 20, height: 20}}
          />
        </TouchableOpacity>
      </View>
      <View style={{marginLeft: 20, marginRight: 20, marginTop: 10}}>
        <Text style={styles.textContainer}>
          <Image
            source={require('../Asset/imgtext1.png')}
            style={styles.image_item}
          />
          <Text style={styles.text_item}>1132/CV-PC</Text>
        </Text>
        <Text style={{color: 'black', marginTop: 10, marginLeft: 30}}>
          Test dữ liệu văn bản đến năm 2011
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            marginTop: 30,
            marginLeft: 30,
            fontSize: 15,
            color: 'black',
          }}>
          Tệp đính kèm
        </Text>
        <Text style={{marginLeft:30,}}>
          <Image
            source={require('../Asset/pdf-removebg-preview.png')}
            style={{marginLeft: 50, width: 20, height: 20}}
          />
          <Text style={{color: 'red'}}>2373.PDF</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  navItem_back: {
    width: 20,
  },
  navText: {
    width: '60%',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  navItem: {
    padding: 10,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d1c2bf',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  image_item: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  text_item: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChiTietVanBan;
