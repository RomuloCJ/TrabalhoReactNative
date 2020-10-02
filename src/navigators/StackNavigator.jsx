import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import TabNavigator from './TabNavigator';
import Login from '../screen/Login/Login';
// import {View} from 'native-base';
import {Image, View} from 'react-native';

const StackNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator screenOptions={{cardStyle: {backgroundColor: '#FFF'}}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{
            headerLeft: () => (
              <Icon
                name="camera"
                size={30}
                style={{paddingLeft: 10, backgroundColor: 'white'}}
              />
            ),
            // title: 'Instagram',
            headerTitleStyle: {flex: 1},
            headerTitle: (props) => (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    width: 100,
                    height: 30,
                  }}>
                  <Image
                    source={require('../assets/img/instagram-logo-1.png')}
                    style={{
                      width: null,
                      height: null,
                      resizeMode: 'contain',
                      flex: 1,
                      marginHorizontal: 'auto',
                    }}
                  />
                </View>
              </View>
            ),
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            //   textAlign: 'center',
            // },
            headerRight: () => (
              <Icon name="paper-plane" size={30} style={{paddingRight: 10}} />
            ),
          }}
        />
      </Stack.Navigator>
    </>
  );
};
export default StackNavigator;
