import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, TouchableOpacity, Text, } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Search_vbd = () => {
    const [selectedValue, setSelectedValue] = useState("item1");
    const handsearch = () => {

    }
    return (
        <View >
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập vào ô thứ nhất"
                    />
                </View>

                <View style={styles.pickerContainer}>
                    
                    <Picker
                       selectedValue={selectedValue}
                       onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)
                        }>
                        <Picker.Item label="Item 1" value="item1" />
                        <Picker.Item label="Item 2" value="item2" />
                        <Picker.Item label="Item 3" value="item3" />
                    </Picker>
                </View>

            </View>
            <TouchableOpacity
                title="Đăng nhập"
                onPress={handsearch}
                style={styles.button}
            >
                <Text style={styles.textButton}>Tìm Kiếm</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    inputContainer: {
        flex: 1,
        margin: 10,
    },
    input: {
        width: '100%',
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        paddingLeft: 10,
    },
    pickerContainer: {
        flex: 1,
        margin: 10,
    },
    textButton: {
        fontSize: 14,
        color: "white",
    },
    button: {
        width: 100,
        height: 30,
        backgroundColor: "#339966",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        marginTop: 50,
    },
});

export default Search_vbd;
