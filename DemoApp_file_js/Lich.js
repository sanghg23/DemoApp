import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Lich = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  const [isStartTimePickerVisible, setStartTimePickerVisibility] =
    useState(false);
  const [isEndTimePickerVisible, setEndTimePickerVisibility] = useState(false);
  const [startTime, setStartTime] = useState(new Date(0, 0, 0, 0, 0));
  const [endTime, setEndTime] = useState(new Date(0, 0, 0, 0, 0));

  const [startTime_to, setStartTime_to] = useState(new Date(0, 0, 0, 0, 0));
  const [endTime_to, setEndTime_to] = useState(new Date(0, 0, 0, 0, 0));

  const data = [
    {id: '1', title: 'T2', title_date: '18/11/2019'},
    {id: '2', title: 'T3', title_date: '18/11/2019'},
    {id: '3', title: 'T4', title_date: '18/11/2019'},
    {id: '4', title: 'T5', title_date: '18/11/2019'},
    {id: '5', title: 'T6', title_date: '18/11/2019'},
    {id: '6', title: 'T7', title_date: '18/11/2019'},
  ];
  const handlePrevious = () => {
    if (selectedId === null) {
      setSelectedId(data[0].id);
    } else {
      const currentIndex = data.findIndex(item => item.id === selectedId);
      if (currentIndex > 0) {
        setSelectedId(data[currentIndex - 1].id);
      }
    }
  };

  const handleNext = () => {
    if (selectedId === null) {
      setSelectedId(data[0].id);
    } else {
      const currentIndex = data.findIndex(item => item.id === selectedId);
      if (currentIndex < data.length - 1) {
        setSelectedId(data[currentIndex + 1].id);
      }
    }
  };

  const showStartTimePicker = () => {
    setStartTimePickerVisibility(true);
  };

  const showEndTimePicker = () => {
    setEndTimePickerVisibility(true);
  };

  const hideStartTimePicker = () => {
    setStartTimePickerVisibility(false);
  };

  const hideEndTimePicker = () => {
    setEndTimePickerVisibility(false);
  };

  const handleStartTimeConfirm = date => {
    setStartTime_to(date);
    setStartTime(date);
    setEndTime(new Date(0, 0, 0, 0, 0));
    setEndTime_to(new Date(0, 0, 0, 0, 0));
    setEndTimePickerVisibility(true);
    hideStartTimePicker();
  };

  const handleEndTimeConfirm = date => {
    setEndTime(date);
    setStartTime_to(date);
    hideEndTimePicker();
  };

  // const handleStartTimeConfirm = date => {
  //   setStartTime(date);
  //   setEndTime(new Date(0, 0, 0, 0, 0));
  //   setEndTimePickerVisibility(true);
  //   hideStartTimePicker();
  // };

  // const handleEndTimeConfirm = date => {
  //   setEndTime(date);
  //   hideEndTimePicker();
  // };

  // const handleConfirm = date => {
  //   let hours = date.getHours();
  //   const minutes = ('0' + date.getMinutes()).slice(-2);
  //   const ampm = hours >= 12 ? 'PM' : 'AM';
  //   hours %= 12;
  //   hours = hours || 12;
  //   const time = `${hours}:${minutes} ${ampm}`;
  //   setSelectedTime(time);
  //   hideDatePicker();
  // };
  // const hideDatePicker = () => {
  //   setDatePickerVisibility(false);
  // };
  return (
    <View>
      <View
        style={{
          marginTop: 10,
          width: '100%',
          marginRight: 20,
          backgroundColor: 'white',
          borderBottomWidth: 1,
          borderBottomColor: '#999999',
        }}>
        <Text style={{color: 'black', marginLeft: 20}}>Xem lịch</Text>
        <View
          style={{
            marginBottom: 10,
            marginLeft: 20,
            marginRight: 20,
          }}>
          <View style={styles.pickerWrapper}>
            <Picker
              mode="dropdown"
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
              style={styles.picker}
              itemStyle={{width: 40, height: 10, backgroundColor: 'red'}}>
              <Picker.Item label="Tổng hợp" value="" />
              <Picker.Item label="Item 1" value="item1" />
              <Picker.Item label="Item 2" value="item2" />
              <Picker.Item label="Item 3" value="item3" />
            </Picker>
          </View>
        </View>
      </View>
      <View
        style={{alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
        <View style={styles.container_all}>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={handlePrevious}
              style={{
                width: '10%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../Asset/back.png')}
                style={{width: 15, height: 10}}
              />
            </TouchableOpacity>

            {/* <View style={{width: '100%'}}>
              <SwiperFlatList
                data={data}
                keyExtractor={item => item.id}
                horizontal={true}
                style={styles.flatList}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() => {
                      console.log('đã chọn');
                    }}>
                    <View
                      style={[
                        styles.item,
                        {
                          backgroundColor:
                            selectedId === item.id ? '#ffad2b' : '#93523b',
                        },
                      ]}>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: 12,
                          fontWeight: 'bold',
                          color: 'white',
                        }}>
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: 10,
                          color: 'white',
                        }}>
                        {item.title_date}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View> */}

            <TouchableOpacity
              onPress={handleNext}
              style={{
                width: '10%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../Asset/next.png')}
                style={{width: '15%', height: 10}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          marginTop: 50,
          marginLeft: 50,
        }}>
        <Image
          source={require('../Asset/people.png')}
          style={{width: 25, height: 25}}
        />

        <Text style={{marginLeft: 10, color: '#93523b'}}>
          Chương trình làm việc ngày 19/11/2022
        </Text>
      </View>
      <Text style={{marginLeft: 80}}>Vụ tổ chức cán bộ</Text>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#ffebb3',
          borderRadius: 30,
          marginLeft: 20,
          marginRight: 20,
          marginTop: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: '25%',
            margin: 5,
          }}>
          <TouchableOpacity
            onPress={showStartTimePicker}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', color: 'black', marginRight: 5}}>
              {' '}
              {startTime.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </Text>
          </TouchableOpacity>
          <Text style={{fontWeight: 'bold', color: 'black', marginTop: 3}}>
            -
          </Text>
          <TouchableOpacity
            onPress={showEndTimePicker}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', color: 'black', marginLeft: 5}}>
              {endTime.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </Text>
          </TouchableOpacity>

          <DateTimePickerModal
            isVisible={isStartTimePickerVisible}
            mode="time"
            onConfirm={handleStartTimeConfirm}
            onCancel={hideStartTimePicker}
            date={startTime}
          />
          <DateTimePickerModal
            isVisible={isEndTimePickerVisible}
            mode="time"
            onConfirm={handleEndTimeConfirm}
            onCancel={hideEndTimePicker}
            date={endTime}
          />
        </View>
        <View style={{marginLeft: '20%', margin: 5}}>
          <TouchableOpacity onPress={showStartTimePicker}>
            <Image
              source={require('../Asset/down-arrow.png')}
              style={{width: 20, height: 20}}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          // backgroundColor: '#ffebb3',
          borderRadius: 30,
          marginLeft: 20,
          marginRight: 20,
          marginTop: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: '25%',
            margin: 5,
          }}>
          <TouchableOpacity
            onPress={showStartTimePicker}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', color: 'black', marginRight: 5}}>
              {' '}
              {startTime_to.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </Text>
          </TouchableOpacity>
          <Text style={{fontWeight: 'bold', color: 'black', marginTop: 3}}>
            -
          </Text>
          <TouchableOpacity
            onPress={showEndTimePicker}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', color: 'black', marginLeft: 5}}>
              {endTime_to.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </Text>
          </TouchableOpacity>

          <DateTimePickerModal
            isVisible={isStartTimePickerVisible}
            mode="time"
            onConfirm={handleStartTimeConfirm}
            onCancel={hideStartTimePicker}
            date={startTime_to}
          />
          <DateTimePickerModal
            isVisible={isEndTimePickerVisible}
            mode="time"
            onConfirm={handleEndTimeConfirm}
            onCancel={hideEndTimePicker}
            date={endTime_to}
          />
        </View>
        <View style={{marginLeft: '20%', margin: 5}}>
          <TouchableOpacity onPress={showStartTimePicker}>
            <Image
              source={require('../Asset/up-arrow.png')}
              style={{width: 20, height: 20}}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{margin:20,marginLeft:30,marginTopL:10,}}>
        <Text style={{fontWeight:'bold',color:'black',}}>Nội dung công việc</Text>
        <Text style={{color:'black',marginTop:10,}}>Họp với BNV</Text>
        <Text style={{color:'black'}}>Tài liệu họp:</Text>

        <View style={{flexDirection: 'row', alignItems: 'center',marginTop:10,}}>
          <Image
            source={require('../Asset/pdf-removebg-preview.png')}
            style={{width: 15, height: 15,}}
          />
          <Text style={{marginLeft: 10, color: '#93523B' }}>
            Kế hoạch tuần từ 18/11 - 23/11/2019.đọc</Text>
          
        </View>

        <Text style={{fontWeight:'bold',color:'black',marginTop:30}}>Bộ phận chuẩn bị nội dung</Text>
        <Text style={{color:'black',marginTop:10,}}>Tổng giám đốc: Nguyễn Văn Anh</Text>

        <Text style={{fontWeight:'bold',color:'black',marginTop:30}}>Địa điểm</Text>
      </View>
    </View>
  );
};

export default Lich;

const styles = StyleSheet.create({
  container_all: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    flex: 1,
    height: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#93523b',
    borderRadius: 5,
  },
  flatList: {
    width: '100%',
    paddingBottom: 3,
    flexGrow: 0,
    borderWidth: 1,
  },
  item: {
    width: '16,6666%',
    height: 30,
    marginTop: 5,
    borderColor: 'white',
    borderRadius: 0.5,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
  },
  picker: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  pickerItem: {
    height: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  pickerWrapper: {
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
    marginTop: 5,
    borderBottomWidth: 1,
  },

  container_time: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerContainer_time: {
    marginBottom: 20,
  },
  buttonContainer_time: {
    marginBottom: 10,
  },
});
