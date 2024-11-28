import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationProp} from '../../../routes/stack.interface';
import {TextInput} from 'react-native-gesture-handler';
import {Controller, useForm, useWatch} from 'react-hook-form';
import {Picker} from '@react-native-picker/picker';
import {AuthRegister} from '../../../service/user/register';

const logo = require('../../../assets/logo.png');

type FormData = {
  name: string;
  schoolSubject: string;
  role: 'teacher' | 'student';
  username: string;
  password: string;
};

export function Register() {
  const navigation = useNavigation<NavigationProp>();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({});

  const onSubmit = handleSubmit(data => {
    const auth = AuthRegister(data);

    if (auth) {
      navigation.navigate('Login');
    }
  });

  // O useWatch é um hook do react-hook-form que permite que a tela reaja a mudanças no valor de um campo no formulário
  const selectedRole = useWatch({
    control,
    name: 'role',
    defaultValue: 'student',
  });

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />
      <Text style={styles.title}>Crie sua conta</Text>
      <View style={styles.form}>
        <Controller
          control={control}
          name="name"
          render={({field: {onChange, onBlur, value}}) => (
            <View style={styles.label}>
              <TextInput
                placeholder="Nome completo"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.input}
              />
            </View>
          )}
        />

        <Controller
          control={control}
          name="role"
          render={({field: {onChange, value}}) => (
            <View style={styles.label}>
              <View style={styles.picker}>
                <Picker selectedValue={value} onValueChange={onChange}>
                  <Picker.Item
                    label="Tipo de perfil"
                    value=""
                    enabled={false}
                    color="grey"
                  />
                  <Picker.Item label="Aluno" value="student" />
                  <Picker.Item label="Professor" value="teacher" />
                </Picker>
              </View>
            </View>
          )}
        />

        {selectedRole === 'teacher' && (
          <Controller
            control={control}
            name="name"
            render={({field: {onChange, value}}) => (
              <View style={styles.label}>
                <View style={styles.picker}>
                  <Picker selectedValue={value} onValueChange={onChange}>
                    <Picker.Item
                      label="Selecione uma matéria"
                      value=""
                      enabled={false}
                      color="grey"
                    />
                    <Picker.Item label="Biologia" value="Biologia" />
                    <Picker.Item label="Física" value="Física" />
                    <Picker.Item label="Geografia" value="Geografia" />
                    <Picker.Item label="História" value="História" />
                    <Picker.Item label="Inglês" value="Inglês" />
                    <Picker.Item label="Matemática" value="Matemática" />
                    <Picker.Item label="Português" value="Português" />
                    <Picker.Item label="Química" value="Química" />
                  </Picker>
                </View>
              </View>
            )}
          />
        )}

        <Controller
          control={control}
          name="username"
          render={({field: {onChange, onBlur, value}}) => (
            <View style={styles.label}>
              <TextInput
                placeholder="Crie um username"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.input}
              />
            </View>
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({field: {onChange, onBlur, value}}) => (
            <View style={styles.label}>
              <TextInput
                placeholder="Crie uma senha"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={true}
                style={styles.input}
              />
            </View>
          )}
        />

        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={() => onSubmit()}
            style={[styles.button, styles.btnPrimary]}>
            <Text style={styles.btnTextPrimary}>Criar conta</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.btnSecondary]}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.btnTextSecondary}>Voltar</Text>
          </TouchableOpacity>
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
    fontSize: 15,
    fontWeight: 400,
  },
  picker: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
  },
  buttons: {
    width: '100%',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnPrimary: {
    backgroundColor: '#219ebc',
  },
  btnSecondary: {
    borderColor: '#219ebc',
    borderWidth: 1,
  },
  btnTextPrimary: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 19,
    fontWeight: 'bold',
  },
  btnTextSecondary: {
    color: '#219ebc',
    fontSize: 16,
    lineHeight: 19,
    fontWeight: 'bold',
  },
});
