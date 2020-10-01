import {Container, Content, Thumbnail} from 'native-base';
import React from 'react';
import CardComponent from '../../components/CardComponents';
import Stories from '../../components/Stories';

const Home = () => {
  return (
    <>
      <Container>
        <Content>
          <Stories />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </Content>
      </Container>
    </>
  );
};
export default Home;
