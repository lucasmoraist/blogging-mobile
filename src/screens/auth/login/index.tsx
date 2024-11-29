import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../../routes/stack.interface';
import {Controller, useForm} from 'react-hook-form';
import {Signin} from '../../../api/user/login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button} from '../../../components/button';
import { Input } from '../../../components/input';

const logo = require('../../../assets/logo.png');

type FormData = {
  username: string;
  password: string;
};

export function Login() {
  const navigation = useNavigation<NavigationProp>();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({});

  const onSubmit = handleSubmit(async data => {
    const {username, password} = data;

    try {
      const response = await Signin({username, password});

      if (!response) {
        throw new Error('Erro ao fazer login');
      }

      await AsyncStorage.setItem('token', response.token);
      await AsyncStorage.setItem('user_id', String(response.user_id));
      await AsyncStorage.setItem('role', response.role);

      navigation.navigate('Tab');
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />
      <Text style={styles.title}>Faça login</Text>
      <View style={styles.form}>
        <Input type='text' control={control} name='username' placeholder='Email'/>
        <Input type='password' control={control} name='password' placeholder='Senha'/>

        <View style={styles.buttons}>
          <Button type="primary" onPress={onSubmit} title="Acessar" />
          <Button
            type="secondary"
            onPress={() => navigation.navigate('Register')}
            title="Criar conta"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  image: {
    width: 60,
    height: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#219ebc',
  },
  form: {
    width: 250,
    gap: 10,
  },
  label: {
    gap: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  buttons: {
    width: '100%',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
