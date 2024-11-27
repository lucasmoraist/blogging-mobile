import {NativeStackNavigationProp, NativeStackScreenProps} from '@react-navigation/native-stack';

export type PropsStackRoutes = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  PostDetails: {id: number};
};

export type PropsStackScreens<T extends keyof PropsStackRoutes> =
  NativeStackScreenProps<PropsStackRoutes, T>;

export type NavigationProp = NativeStackNavigationProp<PropsStackRoutes>;
