import React, { FlatList, StyleSheet, Text, View } from 'react-native';

const App = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    item: {
      padding: 10,
      fontSize:18,
      height: 44
    }
  })

  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'name1'},
          {key: 'name2'},
          {key: 'name3'}
        ]}
        renderItem={({item}) => <Text 
        style={styles.item}>
        {item.key}
        </Text>}
      />
    </View>
  )
}

export default App