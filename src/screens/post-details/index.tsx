import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../routes/stack.interface';
import {FormatDate} from '../../components/formatDate';
import {usePost} from '../../hooks/usePost';

export function PostDetails() {
  const navigation = useNavigation<NavigationProp>();

  const post = usePost();

  if (!post) {
    return <View />;
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
          <Text style={styles.created_at}>{FormatDate(post.createdat)}</Text>
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
