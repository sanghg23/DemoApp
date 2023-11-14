import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Button,
  FlatList,
  Image,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';

const Search_vbd = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [openStartDate, setOpenStartDate] = useState(false);
  const [openEndDate, setOpenEndDate] = useState(false);

  const handleBackPress = () => {
    navigation.goBack();

  };

  const handleStartDateChange = date => {
    setStartDate(date);
    setOpenStartDate(false);
  };

  const handleEndDateChange = date => {
    setEndDate(date);
    setOpenEndDate(false);
  };

  const handsearch = () => {
    console.log('Đã bắt đầu tìm kiếm');
  };
  const data = [
    {
      id: '1',
      title: 'Test dữ liệu văn bản đến năm 2011',
      xemvb: 'Xem văn bản',
      time: 'Hạn xử lý: 06/01/2022',
    },
    {
      id: '1',
      title: 'Test dữ liệu văn bản đến năm 2011',
      xemvb: 'Xem văn bản',
      time: 'Hạn xử lý: 06/01/2022',
    },
    {
      id: '1',
      title: 'Test dữ liệu văn bản đến năm 2011',
      xemvb: 'Xem văn bản',
      time: 'Hạn xử lý: 06/01/2022',
    },
    {
      id: '1',
      title: 'Test dữ liệu văn bản đến năm 2011',
      xemvb: 'Xem văn bản',
      time: 'Hạn xử lý: 06/01/2022',
    },
    {
      id: '1',
      title: 'Test dữ liệu văn bản đến năm 2011',
      xemvb: 'Xem văn bản',
      time: 'Hạn xử lý: 06/01/2022',
    },
    {
      id: '1',
      title: 'Test dữ liệu văn bản đến năm 2011',
      xemvb: 'Xem văn bản',
      time: 'Hạn xử lý: 06/01/2022',
    },
    {
      id: '1',
      title: 'Test dữ liệu văn bản đến năm 2011',
      xemvb: 'Xem văn bản',
      time: 'Hạn xử lý: 06/01/2022',
    },
    {
      id: '1',
      title: 'Test dữ liệu văn bản đến năm 2011',
      xemvb: 'Xem văn bản',
      time: 'Hạn xử lý: 06/01/2022',
    },
    {
      id: '1',
      title: 'Test dữ liệu văn bản đến năm 2011',
      xemvb: 'Xem văn bản',
      time: 'Hạn xử lý: 06/01/2022',
    },
    {
      id: '1',
      title: 'Test dữ liệu văn bản đến năm 2011',
      xemvb: 'Xem văn bản',
      time: 'Hạn xử lý: 06/01/2022',
    },
  ];

  return (
    <View style={styles.tong}>
      <View style={styles.navContainer}>
        <TouchableOpacity style={styles.navItem_back}  onPress={handleBackPress}>
          <Image
            source={require('../Asset/back.png')}
            style={{width: 20, height: 20}}
          />
        </TouchableOpacity>
        <Text style={styles.navText}>VĂN BẢN ĐẾN</Text>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('../Asset/search.png')}
            style={{width: 20, height: 20}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Từ Khóa</Text>
          <TextInput style={styles.input} placeholder="Nhập từ khóa tìm kiếm..." />
        </View>

        <View style={styles.pickerContainer}>
          <Text style={styles.label}>Cơ Quan Ban Hành</Text>
          <Picker
            mode="dropdown"
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
            style={styles.picker}
            itemStyle={styles.pickerItem}>
            <Picker.Item label="chọn" value="" />
            <Picker.Item label="Item 1" value="item1" />
            <Picker.Item label="Item 2" value="item2" />
            <Picker.Item label="Item 3" value="item3" />
          </Picker>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Ngày bắt đầu</Text>
          <TouchableOpacity onPress={() => setOpenStartDate(true)}>
            <TextInput
              style={styles.input}
              placeholder="Chọn ngày bắt đầu"
              editable={false}
              value={startDate ? startDate.toDateString() : ''}
            />
          </TouchableOpacity>
          <DatePicker
            modal
            open={openStartDate}
            date={startDate || new Date()}
            onConfirm={handleStartDateChange}
            onCancel={() => setOpenStartDate(false)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Ngày kết thúc</Text>
          <TouchableOpacity onPress={() => setOpenEndDate(true)}>
            <TextInput
              style={styles.input}
              placeholder="Chọn ngày kết thúc"
              editable={false}
              value={endDate ? endDate.toDateString() : ''}
            />
          </TouchableOpacity>
          <DatePicker
            modal
            open={openEndDate}
            date={endDate || new Date()}
            onConfirm={handleEndDateChange}
            onCancel={() => setOpenEndDate(false)}
          />
        </View>
      </View>

      <TouchableOpacity onPress={handsearch} style={styles.button}>
        <Text style={styles.textButton}>Tìm Kiếm</Text>
      </TouchableOpacity>

      <FlatList
        style={{marginTop: 10}}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ChiTietVanBan')}>
            <View style={styles.listItem}>
              <Text
                style={{color: '#000000', fontSize: 16, fontWeight: 'bold'}}>
                <Image source={require('../Asset/imgtext1.png')} />
                1132/CV-PC
              </Text>
              <Text style={{marginLeft: 40, color: '#000000', marginTop: 10}}>
                {item.title}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 10,
                }}>
                <View style={styles.xemvb}>
                  <Image
                    source={require('../Asset/read_book.png')}
                    style={styles.smallImage}
                  />
                  <Text style={styles.fadedText}>{item.xemvb}</Text>
                </View>
                <View style={styles.xemvb}>
                  <Image
                    source={require('../Asset/time.png')}
                    style={styles.smallImage}
                  />
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

const styles = StyleSheet.create({
  tong: {
    flex: 1,
  },

  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
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

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  inputContainer: {
    flex: 1,
    marginRight: 10,
  },
  input: {
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: 10,
    color:'black',
  },
  pickerContainer: {
    flex: 1,
    marginLeft: 10,
  },
  textButton: {
    fontSize: 16,
    color: 'white',
  },
  button: {
    width: '40%',
    height: 40,
    backgroundColor: '#93523b',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    alignSelf: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'black',
  },
  picker: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    height: 40,

    paddingHorizontal: 10,
  },
  pickerItem: {
    fontSize: 16,
    fontWeight: 'bold',
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
    marginRight: 6,
  },
});

export default Search_vbd;
