import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {usePost} from '../../hooks/usePost';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {Button} from '../../components/button';
import {Input} from '../../components/input';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../routes/stack.interface';
import {editPost} from '../../api/post/editPost';
import {ScrollView} from 'react-native-gesture-handler';

const schema = Yup.object({
  title: Yup.string().optional(),
  content: Yup.string().optional(),
});

type FormData = Yup.InferType<typeof schema>;

export function EditPost() {
  const navigation = useNavigation<NavigationProp>();
  const post = usePost();
  const postId = post.id;
  const postTitle = post.title;
  const postContent = post.content;

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async data => {
    try {
      const post = {
        title: data.title ? data.title : postTitle,
        content: data.content ? data.content : postContent,
      };

      await editPost(postId, post);

      navigation.navigate('Tab');
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <ScrollView>
      <View style={styles.top}>
        <Text style={styles.titulo}>Edite o post</Text>
      </View>

      <View style={styles.form}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Tab')}>
          <Text style={styles.btnText}>Voltar</Text>
        </TouchableOpacity>
        <Image source={{uri: post.urlimage}} style={styles.image} />
        <Input
          type="text"
          control={control}
          
          name="title"
          placeholder={post?.title}
        />
        {errors.title && <Text>{errors.title.message}</Text>}

        <Input
          type="text"
          control={control}
          name="content"
          placeholder={post?.content}
          multiline={true}
          style={styles.textArea}
        />
        {errors.content && <Text>{errors.content.message}</Text>}

        <Button type="primary" title="Salvar" onPress={onSubmit} />
      </View>
    </ScrollView>
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
    marginBottom: 20,
    gap: 10,
  },
  textArea: {
    height: 400,
  },
  btn: {
    backgroundColor: '#e36414',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    width: 60,
    height: 30,
    borderRadius: 30,
    marginBottom: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 12,
    lineHeight: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginBottom: 8,
  },
});
