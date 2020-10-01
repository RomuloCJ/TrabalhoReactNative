import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../screen/Home/Home';
import Video from '../screen/Exemplos/Video';
import Add from '../screen/Exemplos/Add';
import Curtir from '../screen/Exemplos/Curtir';
import Perfil from '../screen/Exemplos/Perfil';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name == 'Video') {
            iconName = focused ? 'film' : 'film';
          } else if (route.name == 'Add') {
            iconName = focused ? 'plus-square' : 'plus-square';
          } else if (route.name == 'Curtir') {
            iconName = focused ? 'heart-o' : 'heart-o';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Video" component={Video} />
      <Tab.Screen name="Add" component={Add} />
      <Tab.Screen name="Curtir" component={Curtir} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
};
export default TabNavigator;
