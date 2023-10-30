import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';

const List_vbd = ({ navigation }) => {
  const data = [
    { id: '1', title: 'Test dữ liệu văn bản đến năm 2011', xemvb: 'Xem văn bản', time: 'Hạn xử lý: 06/01/2022', },
    { id: '1', title: 'Test dữ liệu văn bản đến năm 2011', xemvb: 'Xem văn bản', time: 'Hạn xử lý: 06/01/2022', },
    { id: '1', title: 'Test dữ liệu văn bản đến năm 2011', xemvb: 'Xem văn bản', time: 'Hạn xử lý: 06/01/2022', },
    { id: '1', title: 'Test dữ liệu văn bản đến năm 2011', xemvb: 'Xem văn bản', time: 'Hạn xử lý: 06/01/2022', },
    { id: '1', title: 'Test dữ liệu văn bản đến năm 2011', xemvb: 'Xem văn bản', time: 'Hạn xử lý: 06/01/2022', },
    { id: '1', title: 'Test dữ liệu văn bản đến năm 2011', xemvb: 'Xem văn bản', time: 'Hạn xử lý: 06/01/2022', },
    { id: '1', title: 'Test dữ liệu văn bản đến năm 2011', xemvb: 'Xem văn bản', time: 'Hạn xử lý: 06/01/2022', },
    { id: '1', title: 'Test dữ liệu văn bản đến năm 2011', xemvb: 'Xem văn bản', time: 'Hạn xử lý: 06/01/2022', },
    { id: '1', title: 'Test dữ liệu văn bản đến năm 2011', xemvb: 'Xem văn bản', time: 'Hạn xử lý: 06/01/2022', },
    { id: '1', title: 'Test dữ liệu văn bản đến năm 2011', xemvb: 'Xem văn bản', time: 'Hạn xử lý: 06/01/2022', },
  ];

  return (
    <View style={styles.container1}>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('VanBanDen_Search')}>
            <View style={styles.listItem}>
              <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold' }}>
                <Image source={require('../Asset/imgtext1.png')} />
                1132/CV-PC
              </Text>
              <Text style={{ marginLeft: 40, color: '#000000',marginTop:10 }}>{item.title}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, marginRight: 20,marginTop:10 }}>
                <View  style={styles.xemvb}>
                  <Image source={require('../Asset/read_book.png')} style={styles.smallImage} />
                  <Text style={styles.fadedText}>{item.xemvb}</Text>
                </View>
                <View  style={styles.xemvb}>
                  <Image source={require('../Asset/time.png')} style={styles.smallImage} />
                  <Text style={styles.fadedText}>{item.time}</Text>
                </View>
                
              </View>

            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default List_vbd;

const styles = StyleSheet.create({
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItem: {
    margin: 10,

  },
  image: {
    width: 50,
    height: 50,
  },
  fadedText: {
    color: 'gray', 
    opacity: 0.6,     
    textAlign: 'center',
 
  },
  xemvb: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
  },
  smallImage: {
    width: 16,   
    height: 16,  
    marginRight:6,
  },
});
