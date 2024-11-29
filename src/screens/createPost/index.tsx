import {useForm} from 'react-hook-form';
import {StyleSheet, Text, View} from 'react-native';
import {getOneTeacher} from '../../api/teacher/getOneTeacher';
import {IPost} from '../../interface/post.interface';
import {createPost} from '../../api/post/createPost';
import {Input} from '../../components/input';
import {Button} from '../../components/button';

type FormData = {
  title: string;
  content: string;
  urlimage: string;
  teacher_id: number;
};

export function Create() {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({});

  const onSubmit = handleSubmit(async data => {
    const teacher = await getOneTeacher();

    if (!teacher.id) {
      throw new Error('Erro ao buscar professor: ID não retornado');
    }
    try {
      const post: IPost = {
        title: data.title,
        content: data.content,
        urlimage: data.urlimage,
        teacher_id: teacher.id,
      };
      console.log('Post: ' + post);

      await createPost(post);
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
        <Input
          type="text"
          control={control}
          name="content"
          placeholder="Conteúdo do Post"
        />
        <Input
          type="text"
          control={control}
          name="urlimage"
          placeholder="URL da imagem"
        />

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
    marginBottom: 40
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  form: {
    marginHorizontal: 20,
    gap: 10
  },
})