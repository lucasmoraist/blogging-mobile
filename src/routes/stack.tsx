import React from 'react';
import {Home} from '../screens/home';
import {PostDetails} from '../screens/post-details';
import {createStackNavigator} from '@react-navigation/stack';
import {PropsStackRoutes, PropsTabRoutes} from './stack.interface';
import {Login} from '../screens/auth/login';
import {Register} from '../screens/auth/register';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import {Search} from '../screens/search';
import {Profile} from '../screens/profile';

const home = require('../assets/icon-home.png');
const search = require('../assets/icon-search.png');
const profile = require('../assets/icon-user.png');

const Stack = createStackNavigator<PropsStackRoutes>();
const Tab = createBottomTabNavigator<PropsTabRoutes>();

export function StackNavigationApp() {
  const TabNavigation = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerTitle: '',
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => (
              <Image source={home} style={{width: 20, height: 20}} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: () => (
              <Image source={search} style={{width: 20, height: 20}} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: () => (
              <Image source={profile} style={{width: 20, height: 20}} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitle: '',
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      {/* <Stack.Screen name="Home" component={Home} /> */}
      <Stack.Screen name="PostDetails" component={PostDetails} />
      <Stack.Screen name="Tab" component={TabNavigation} />
    </Stack.Navigator>
  );
}
