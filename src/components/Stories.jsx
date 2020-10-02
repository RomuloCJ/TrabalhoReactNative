import React from 'react';
import {Text, View} from 'react-native';
import {Item, Thumbnail} from 'native-base';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

const Stories = () => {
  const stories = [
    {label: 'Rômulo', style: {marginLeft: 12, marginRight: 17}},
    {label: 'Ana', style: {marginLeft: 12, marginRight: 17}},
    {label: 'Verônica', style: {marginLeft: 12, marginRight: 17}},
    {label: 'Mariana', style: {marginLeft: 12, marginRight: 17}},
    {label: 'Verônica', style: {marginLeft: 12, marginRight: 17}},
    {label: 'Jorge', style: {marginLeft: 12, marginRight: 17}},
    {label: 'Rômulo', style: {marginLeft: 12, marginRight: 17}},
    {label: 'Rômulo', style: {marginLeft: 12, marginRight: 17}},
  ];
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
            source={require('../assets/img/Foto.png')}
          />
          <Thumbnail
            style={{
              marginHorizontal: 5,
              borderColor: 'pink',
              borderWidth: 3,
            }}
            source={require('../assets/img/geralda.jpg')}
          />
          <Thumbnail
            style={{
              marginHorizontal: 5,
              borderColor: 'pink',
              borderWidth: 3,
            }}
            source={require('../assets/img/velhinha.jpg')}
          />
          <Thumbnail
            style={{
              marginHorizontal: 5,
              borderColor: 'pink',
              borderWidth: 3,
            }}
            source={require('../assets/img/mariana.jpg')}
          />
          <Thumbnail
            style={{
              marginHorizontal: 5,
              borderColor: 'pink',
              borderWidth: 3,
            }}
            source={require('../assets/img/veronica.jpg')}
          />
          <Thumbnail
            style={{
              marginHorizontal: 5,
              borderColor: 'pink',
              borderWidth: 3,
            }}
            source={require('../assets/img/jorge.jpg')}
          />
          <Thumbnail
            style={{
              marginHorizontal: 5,
              borderColor: 'pink',
              borderWidth: 3,
            }}
            source={require('../assets/img/Foto.png')}
          />
        </ScrollView>
      </View>
      <View style={{flex: 3}}>
        <ScrollView horizontal={true}>
          <FlatList
            horizontal
            data={stories}
            renderItem={(story) => (
              <Text style={story.style}>{story.label}</Text>
            )}
            keyExtractor={(story, index) => index}
          />
        </ScrollView>
      </View>
    </>
  );
};
export default Stories;
