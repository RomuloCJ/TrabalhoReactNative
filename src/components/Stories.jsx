import React from 'react';
import {Text, View} from 'react-native';
import {Thumbnail} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';

const Stories = () => {
  return (
    <>
      <View style={{flex: 3}}>
        <ScrollView horizontal={true}>
          <Thumbnail
            style={{
              marginHorizontal: 5,
              borderColor: 'pink',
              borderWidth: 3,
            }}
            source={require('../assents/img/Foto.png')}
          />
          <Thumbnail
            style={{
              marginHorizontal: 5,
              borderColor: 'pink',
              borderWidth: 3,
            }}
            source={require('../assents/img/Foto.png')}
          />
          <Thumbnail
            style={{
              marginHorizontal: 5,
              borderColor: 'pink',
              borderWidth: 3,
            }}
            source={require('../assents/img/Foto.png')}
          />
          <Thumbnail
            style={{
              marginHorizontal: 5,
              borderColor: 'pink',
              borderWidth: 3,
            }}
            source={require('../assents/img/Foto.png')}
          />
          <Thumbnail
            style={{
              marginHorizontal: 5,
              borderColor: 'pink',
              borderWidth: 3,
            }}
            source={require('../assents/img/Foto.png')}
          />
          <Thumbnail
            style={{
              marginHorizontal: 5,
              borderColor: 'pink',
              borderWidth: 3,
            }}
            source={require('../assents/img/Foto.png')}
          />
          <Thumbnail
            style={{
              marginHorizontal: 5,
              borderColor: 'pink',
              borderWidth: 3,
            }}
            source={require('../assents/img/Foto.png')}
          />
        </ScrollView>
      </View>
      <View style={{flex: 3}}>
        <ScrollView horizontal={true}>
          <Text style={{marginLeft: 12, marginRight: 17}}>André</Text>
          <Text style={{marginLeft: 12, marginRight: 17}}>André</Text>
          <Text style={{marginLeft: 12, marginRight: 17}}>André</Text>
          <Text style={{marginLeft: 12, marginRight: 17}}>André</Text>
          <Text style={{marginLeft: 12, marginRight: 17}}>André</Text>
          <Text style={{marginLeft: 12, marginRight: 17}}>André</Text>
        </ScrollView>
      </View>
    </>
  );
};
export default Stories;
