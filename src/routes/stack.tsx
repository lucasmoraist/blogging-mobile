import React, {useEffect, useState} from 'react';
import {Home} from '../screens/home';
import {PostDetails} from '../screens/post-details';
import {createStackNavigator} from '@react-navigation/stack';
import {PropsStackRoutes, PropsTabRoutes} from './stack.interface';
import {Login} from '../screens/auth/login';
import {Register} from '../screens/auth/register';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Search} from '../screens/search';
import {Profile} from '../screens/profile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from '@react-native-vector-icons/fontawesome6';

const Stack = createStackNavigator<PropsStackRoutes>();
const Tab = createBottomTabNavigator<PropsTabRoutes>();

export function StackNavigationApp() {
  const [role, setRole] = useState<string | null>();

  useEffect(() => {
    async function getRole() {
      const role = await AsyncStorage.getItem('role');
      setRole(role);
    }
    getRole();
  }, []);

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
              <Icon
                name="house"
                iconStyle={'solid'}
                size={20}
                color={'#219EBC'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: () => (
              <Icon
                name="magnifying-glass"
                iconStyle={'solid'}
                size={20}
                color={'#219EBC'}
              />
            ),
          }}
        />
        {role === 'teacher' ? (
          <Tab.Screen
            name="CreatePost"
            component={() => <></>}
            options={{
              tabBarIcon: () => (
                <Icon name="square-plus" size={20} color={'#219EBC'} />
              ),
            }}
          />
        ) : null}
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: () => <Icon name="user" size={20} color={'#219EBC'} />,
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
