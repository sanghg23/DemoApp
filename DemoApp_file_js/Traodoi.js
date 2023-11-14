import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';

const data = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
  { id: '4', title: 'Item 4' },
  { id: '5', title: 'Item 5' },
  { id: '6', title: 'Item 6' },
  { id: '7', title: 'Item 7' },
  { id: '8', title: 'Item 8' },
];

const ListItem = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const FlatListHorizontal = () => {
  return (
    <FlatList
      data={data}
      horizontal
      renderItem={({ item }) => <ListItem title={item.title} />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1, // Just for visualization purposes
  },
  title: {
    fontSize: 20,
  },
});

export default FlatListHorizontal;
