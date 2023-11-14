import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';

const Congviec_Ct = ({navigation}) => {
  const handleBackPress = () => {
    console.log('Quay lại');
    navigation.goBack();
  };
  const handleImagePress = () => {
    console.log('xử lý');
  };
  const data = [
    {
      id: '1',
      title_l: 'Xây dựng dự toán các nhiệm vụ năm 2022',
      title: 'Trung tâm tin học',
      time: '30/10/2021',
      trangthai: 'Đang xử lý',
    },
    {
        id: '2',
        title_l: 'Xây dựng dự toán các nhiệm vụ năm 2022',
        title: 'Trung tâm tin học',
        time: '30/10/2021',
        trangthai: 'Đang xử lý',
      },
      {
        id: '3',
        title_l: 'Xây dựng dự toán các nhiệm vụ năm 2022',
        title: 'Trung tâm tin học',
        time: '30/10/2021',
        trangthai: 'Đang xử lý',
      },
  ];
  return (
    <View style={styles.container_nav}>
      <View style={styles.navContainer}>
        <TouchableOpacity style={styles.navItem_back} onPress={handleBackPress}>
          <Image
            source={require('../Asset/back.png')}
            style={{width: 20, height: 20}}
          />
        </TouchableOpacity>
        <Text style={styles.navText}>CÔNG VIỆC CHỦ TRÌ</Text>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('../Asset/search.png')}
            style={{width: 20, height: 20}}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => handleImagePress(1)}>
          <View style={styles.view_image}>
            <Image
              source={require('../Asset/reload.png')}
              style={styles.image}
            />
          </View>

          <Text style={styles.text}>Đang xử lý</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleImagePress(2)}>
          <View style={styles.view_image}>
            <Image
              source={require('../Asset/reload.png')}
              style={styles.image}
            />
          </View>

          <Text style={styles.text}>Chưa xử lý</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleImagePress(3)}>
          <View style={styles.view_image}>
            <Image
              source={require('../Asset/reload.png')}
              style={styles.image}
            />
          </View>

          <Text style={styles.text}>Đến hạn</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleImagePress(4)}>
          <View style={styles.view_image}>
            <Image
              source={require('../Asset/reload.png')}
              style={styles.image}
            />
          </View>
          <Text style={styles.text}>Quá hạn</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleImagePress(5)}>
          <View style={styles.view_image}>
            <Image
              source={require('../Asset/reload.png')}
              style={styles.image}
            />
          </View>

          <Text style={styles.text}>Xử lý xong</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ChiTietCongViec')}>
            <View style={styles.listItem}>
              <Text style={styles.textContainer}>
                <Image
                  source={require('../Asset/imgtext1.png')}
                  style={styles.image_item}
                />
                <Text style={styles.text_item}>{item.title_l}</Text>
              </Text>
              <View style={{marginLeft:20}}>
                <Text style={{color: 'black',margin:5,}}>
                  <Text style={{fontWeight: 'bold'}}>Tên đơn vị đầu mối: </Text>
                  <Text>{item.title}</Text>
                </Text>
                <Text style={{color: 'black',margin:5,}}>
                  <Text style={{fontWeight: 'bold'}}>Hạn xử lý: </Text>
                  <Text>{item.time}</Text>
                </Text>
                <Text style={{color: 'black',margin:5,}}>
                  <Text style={{fontWeight: 'bold'}}>Trạng Thái: </Text>
                  <Text style={{color: '#1f7a1f'}}>{item.trangthai}</Text>
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container_nav: {
    flex: 1,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: {
    padding: 10,
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

  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
   
  },
  view_image: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#867979',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 12,
    color: 'black',
    textAlign: 'center',
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
  listItem: {
    marginTop:20,
    marginLeft: 20,
    marginRight: 20,
  },
});
export default Congviec_Ct;
