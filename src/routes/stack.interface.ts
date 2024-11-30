import {NativeStackNavigationProp, NativeStackScreenProps} from '@react-navigation/native-stack';

export type PropsStackRoutes = {
  Login: undefined;
  Register: undefined;
  Tab: undefined;
  PostDetails: {id: string};
  EditPost: {id: string};
};

export type	PropsTabRoutes = {
  Home: undefined;
  Profile: {email: string};
  Search: undefined;
  CreatePost: undefined;
}

export type PropsStackScreens<T extends keyof PropsStackRoutes> =
  NativeStackScreenProps<PropsStackRoutes, T>;

export type NavigationProp = NativeStackNavigationProp<PropsStackRoutes>;
