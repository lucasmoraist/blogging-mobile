import {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IPost} from '../../interface/post.interface';
import {getOnePost} from '../../service/post/getOnePost';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NavigationProp, PropsStackRoutes} from '../../routes/stack.interface';

type PostDetailsRouteProp = RouteProp<PropsStackRoutes, 'PostDetails'>;

export function PostDetails() {
  const route = useRoute<PostDetailsRouteProp>();
  const navigation = useNavigation<NavigationProp>();

  const [post, setPost] = useState<IPost>();

  const {id} = route.params;

  useEffect(() => {
    async function fetchPost() {
      const post = await getOnePost(id);
      setPost(post);
    }

    fetchPost();
  }, [id]);

  const formatDate = (date: string) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString('pt-br', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  if (!post) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Tab')}>
        <Text style={styles.btnText}>Voltar</Text>
      </TouchableOpacity>

      <View style={styles.about}>
        <View>
          <Image source={{uri: post.urlimage}} style={styles.image} />
          <Text style={styles.title}>{post.title}</Text>
        </View>

        <View style={styles.info}>
          <View style={styles.author}>
            <Text style={styles.name}>{post.name}</Text>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>•</Text>
            <Text style={styles.school_subject}>{post.school_subject}</Text>
          </View>
          <Text style={styles.created_at}>{formatDate(post.createdat)}</Text>
        </View>
      </View>
      <Text style={styles.content}>{post.content}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    paddingHorizontal: 10,
    marginVertical: 10,
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
  about: {
    gap: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    color: '#219ebc',
  },
  info: {
    gap: 5,
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 200,
    gap: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 24,
  },
  school_subject: {
    fontSize: 18,
    lineHeight: 24,
  },
  created_at: {
    fontSize: 16,
    lineHeight: 24,
    color: '#6c757d',
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    marginVertical: 15,
  },
});
