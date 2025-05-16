import React from 'react';
import { Image, Text, View } from 'react-native';


type CatProps = {
  name: string;
};

const Name = (props: CatProps) => {
  return (
    <View>
    <Text>Hello, I am {props.name}!</Text>
  </View>
  )
}

const App = () => {
  return (
    <>
      <View>
        <Name name='david'/>
        <Name name='rosie'/>
      </View>
      <Image 
        source={{
        uri: 'https://reactnative.dev/docs/assets/p_cat1.png'
      }}
      style={{width: 200, height: 200}}
      />
    </>
  );
};

export default App