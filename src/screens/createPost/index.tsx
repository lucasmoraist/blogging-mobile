import {useForm} from 'react-hook-form';
import {StyleSheet, Text, View} from 'react-native';
import {getOneTeacher} from '../../api/teacher/getOneTeacher';
import {createPost} from '../../api/post/createPost';
import {Input} from '../../components/input';
import {Button} from '../../components/button';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {NavigationProp} from '../../routes/stack.interface';
import {useNavigation} from '@react-navigation/native';

const schema = Yup.object({
  title: Yup.string()
    .required('Título é obrigatório')
    .min(10, 'Título deve ter no mínimo 10 caracteres')
    .max(255, 'Título deve ter no máximo 255 caracteres'),
  content: Yup.string().required('Conteúdo é obrigatório'),
  urlimage: Yup.string()
    .required('URL da imagem é obrigatória')
    .url('URL inválida'),
  teacher_id: Yup.number().optional(),
});

type FormData = Yup.InferType<typeof schema>;

export function Create() {
  const navigation = useNavigation<NavigationProp>();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async data => {
    const teacher = await getOneTeacher();

    if (!teacher.id) {
      throw new Error('Erro ao buscar professor: ID não retornado');
    }
    try {
      const post = {
        title: data.title,
        content: data.content,
        urlimage: data.urlimage,
        teacher_id: teacher.id,
      };

      const response = await createPost(post);

      if (response.id) {
        navigation.navigate('Tab');
      }
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <View>
      <View style={styles.top}>
        <Text style={styles.titulo}>Crie uma postagem nova</Text>
      </View>

      <View style={styles.form}>
        <Input
          type="text"
          control={control}
          name="title"
          placeholder="Título do Post"
        />
        {errors.title && <Text>{errors.title.message}</Text>}
        <Input
          type="text"
          control={control}
          name="urlimage"
          placeholder="URL da imagem"
        />
        {errors.urlimage && <Text>{errors.urlimage.message}</Text>}

        <Input
          type="text"
          control={control}
          name="content"
          placeholder="Conteúdo do Post"
        />
        {errors.content && <Text>{errors.content.message}</Text>}

        <Button type="primary" title="Salvar" onPress={onSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#219ebc',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  form: {
    marginHorizontal: 20,
    gap: 10,
  },
});
