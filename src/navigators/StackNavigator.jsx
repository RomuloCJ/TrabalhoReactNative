import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Icon} from 'native-base';
import TabNavigator from './TabNavigator';

const StackNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{
            headerLeft: () => <Icon name="camera" style={{paddingLeft: 10}} />,
            title: 'Instagram',
            headerTitleStyle: {
              textAlign: 'left',
            },
            headerRight: () => (
              <Icon name="paper-plane" style={{paddingRight: 10}} />
            ),
          }}
        />
      </Stack.Navigator>
    </>
  );
};
export default StackNavigator;
