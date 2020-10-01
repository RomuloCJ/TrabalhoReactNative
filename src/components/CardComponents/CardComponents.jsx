import {
  Body,
  Button,
  Card,
  CardItem,
  Left,
  Right,
  Thumbnail,
} from 'native-base';
import React from 'react';
import {Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CardComponent = () => {
  return (
    <Card>
      <CardItem>
        <Left>
          <Thumbnail
            style={{width: 40, height: 40, borderRadius: 40 / 2}}
            source={require('../../assents/img/Foto.png')}
          />
          <Body>
            <Text>André</Text>
          </Body>
        </Left>
        <Right>
          <Icon size={20} name="ellipsis-v" />
        </Right>
      </CardItem>
      <CardItem>
        <Image
          source={require('../../assents/img/Kazoku.jpg')}
          style={{height: 200, width: null, flex: 1}}
        />
      </CardItem>
      <CardItem>
        <Left>
          <Button transparent>
            <Icon size={20} name="heart-o" />
          </Button>
          <Button transparent>
            <Icon size={20} name="comment-o" />
          </Button>
          <Button transparent>
            <Icon size={20} name="send" />
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
