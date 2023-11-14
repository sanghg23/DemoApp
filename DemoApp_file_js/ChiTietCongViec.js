import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const ChiTiet_CV = ({navigation}) => {
  const handleBackPress = () => {
    navigation.goBack();
  };
  const handleImagePress = () => {
    console.log('chưa xử lý');
  };
  return (
    <View>
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

          <Text style={styles.text}>Chi tiết công việc</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleImagePress(2)}>
          <View style={styles.view_image}>
            <Image
              source={require('../Asset/reload.png')}
              style={styles.image}
            />
          </View>

          <Text style={styles.text}>Cán bộ xử lý</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleImagePress(3)}>
          <View style={styles.view_image}>
            <Image
              source={require('../Asset/reload.png')}
              style={styles.image}
            />
          </View>

          <Text style={styles.text}>Xử lý</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.title}>
        <Text style={styles.textContainer}>
          <Image
            source={require('../Asset/imgtext1.png')}
            style={styles.image_item}
          />
          <Text style={styles.text_item}>
            Xây dựng dự toán các nhiệm vụ năm 2022
          </Text>
        </Text>
        <View style={{marginLeft: 20}}>
          <View style={{margin: 20}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>
              Ngày bắt đầu
            </Text>
            <Text style={{color: 'black', marginTop: 10}}>08/02/2022</Text>
          </View>

          <View style={{margin: 20}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>
              Ngày kết thúc
            </Text>
            <Text style={{color: 'black', marginTop: 10}}>08/02/2022</Text>
          </View>

          <View style={{margin: 20}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>
              Người xử lý phân cấp
            </Text>
            <Text style={{color: 'black', marginTop: 10}}>Giám đốc</Text>
          </View>
          <View style={{margin: 20}}>
            <Text style={{color: 'black', margin: 5, fontWeight: 'bold'}}>
              Nội dung công việc
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color: 'red', margin: 5, fontWeight: 'bold'}}>
                Lãnh đạo sử lý:
              </Text>
              <Text style={{color: 'black'}}>Giám đốc: Nguyễn Văn Anh</Text>
            </View>
          </View>
          <View style={{margin: 20}}>
            <Text style={{color: 'black', margin: 5, fontWeight: 'bold'}}>
              Số ký hiệu
            </Text>
          </View>
          <View style={{margin: 20}}>
            <Text style={{color: 'black', margin: 5, fontWeight: 'bold'}}>
              Trích yếu
            </Text>
          </View>
          <View style={{margin: 20}}>
            <Text style={{color: 'black', margin: 5, fontWeight: 'bold'}}>
              Trích yếu
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ChiTiet_CV;

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
  title: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
});
