import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationProp} from '../../../routes/stack.interface';
import {TextInput} from 'react-native-gesture-handler';
import {Controller, set, useForm, useWatch} from 'react-hook-form';
import {Picker} from '@react-native-picker/picker';
import {IUser} from '../../../interface/user.interface';
import {ITeacher} from '../../../interface/teacher.interface';
import {createUser} from '../../../api/user/register';
import {useState} from 'react';
import {createTeacher} from '../../../api/teacher/create';
import {IStudent} from '../../../interface/student.interface';
import {createStudent} from '../../../api/student/create';
import {Button} from '../../../components/button';
import {Input} from '../../../components/input';

const logo = require('../../../assets/logo.png');

type FormData = {
  name: string;
  school_subject: string;
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

  // O useWatch é um hook do react-hook-form que permite que a tela reaja a mudanças no valor de um campo no formulário
  const selectedRole = useWatch({
    control,
    name: 'role',
    defaultValue: 'student',
  });

  const onSubmit = handleSubmit(async data => {
    const user: IUser = {
      username: data.username,
      password: data.password,
      role: data.role,
    };

    const responseUser = await createUser(user);

    if (!responseUser?.id) {
      throw new Error('Erro ao criar usuário: ID não retornado');
    }

    try {
      if (data.role === 'teacher') {
        const teacher: ITeacher = {
          name: data.name,
          school_subject: data.school_subject,
          user_id: responseUser.id,
        };

        const responseTeacher = await createTeacher(teacher);

        if (!responseTeacher && !responseUser) {
          throw new Error('Erro ao criar professor');
        }
      } else {
        const student: IStudent = {
          name: data.name,
          user_id: responseUser.id,
        };

        const responseStudent = await createStudent(student);

        if (!responseStudent && !responseUser) {
          throw new Error('Erro ao criar aluno');
        }
      }
    } catch (error) {
      console.error('Erro durante a submissão:', error);
    } finally {
      navigation.navigate('Login');
    }
  });

  const pickerItemsRole = [
    {label: 'Aluno', value: 'student'},
    {label: 'Professor', value: 'teacher'},
  ];

  const pickerItemsSubject = [
    {label: 'Biologia', value: 'Biologia'},
    {label: 'Física', value: 'Física'},
    {label: 'Geografia', value: 'Geografia'},
    {label: 'História', value: 'História'},
    {label: 'Inglês', value: 'Inglês'},
    {label: 'Matemática', value: 'Matemática'},
    {label: 'Português', value: 'Português'},
    {label: 'Química', value: 'Química'},
  ];

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />
      <Text style={styles.title}>Crie sua conta</Text>
      <View style={styles.form}>
        <Input
          type="text"
          control={control}
          name="name"
          placeholder="Nome completo"
        />

        <Input
          type="dropdown"
          control={control}
          name="role"
          placeholder="Tipo de perfil"
          pickerItem={pickerItemsRole}
        />

        {selectedRole === 'teacher' && (
          <Input
            type="dropdown"
            name="school_subject"
            control={control}
            placeholder="Selecione uma matéria"
            pickerItem={pickerItemsSubject}
          />
        )}

        <Input
          type="text"
          control={control}
          name="username"
          placeholder="Crie um username"
        />

        <Input
          type="password"
          control={control}
          name="password"
          placeholder="Crie uma senha"
        />

        <View style={styles.buttons}>
          <Button type="primary" onPress={onSubmit} title="Criar conta" />
          <Button
            type="secondary"
            onPress={() => navigation.navigate('Login')}
            title="Voltar"
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
