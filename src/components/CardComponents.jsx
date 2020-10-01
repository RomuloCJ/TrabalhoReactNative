import {Body, Button, Card, CardItem, Icon, Left, Thumbnail} from 'native-base';
import React from 'react';
import {Image, Text, View} from 'react-native';

const CardComponent = () => {
  return (
    <Card>
      <CardItem>
        <Left>
          <Thumbnail source={require('../assents/img/Foto.png')} />
          <Body>
            <Text>André</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem>
        <Image
          source={require('../assents/img/Kazoku.jpg')}
          style={{height: 200, width: null, flex: 1}}
        />
      </CardItem>
      <CardItem>
        <Left>
          <Button transparent>
            <Icon name="ios-heart-outline" />
          </Button>
          <Button transparent>
            <Icon name="ios-heart-outline" />
          </Button>
          <Button transparent>
            <Icon name="ios-heart-outline" />
          </Button>
        </Left>
      </CardItem>
      <CardItem style={{height: 20}}>
        <Text>101 likes</Text>
      </CardItem>
      <CardItem>
        <Body>
          <Text>
            <Text style={{fontWeight: 'bold'}}> André </Text>
            Hossomaki de Filadelfia
          </Text>
        </Body>
      </CardItem>
    </Card>
  );
};
export default CardComponent;
