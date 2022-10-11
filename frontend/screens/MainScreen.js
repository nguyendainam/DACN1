import React from 'react';
import {Text, Image, View, ImageBackground} from 'react-native';

const MainScreen = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 100,
      }}>
      <ImageBackground
        source={
            require('../assets/background.jpg')

        }
        resizeMode='cover'
        style={{
                flex:1 ,
            
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            height: 50,
            
            justifyContent: 'flex-start',
            paddingTop: 5,
            paddingLeft: 5,
          }}>
          <Image
            source={require('../assets/chilli.png')}
            style={{
              width: 35,
              height: 35,
            }}
          />
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontStyle: 'italic',
              paddingLeft: 5,
            }}>
            {' '}
            Cayy Restaurant{' '}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};
export default MainScreen;
