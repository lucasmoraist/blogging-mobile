import {Text} from '@react-navigation/elements';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from '@react-native-vector-icons/fontawesome6';
import {deletePost} from '../../api/post/deletePost';
import {RenderPostsProps} from './types/renderPosts.interface';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../routes/stack.interface';

export function RenderPosts({item, onDelete}: RenderPostsProps) {
  const navigation = useNavigation<NavigationProp>();
  const handleDelete = async () => {
    try {
      console.log('Deletando post:', item.id);

      await deletePost(item.id); // Função para deletar o post
      onDelete(item.id); // Atualiza a lista no componente pai
    } catch (error) {
      console.error('Erro ao deletar post:', error);
    }
  };

  const formatedText =
    item.title.length > 20 ? item.title.slice(0, 25) + '...' : item.title;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={{uri: item.urlImage}} style={styles.image} />
        <TouchableOpacity
          onPress={() => navigation.navigate('PostDetails', {id: item.id})}>
          <Text style={styles.title}>{formatedText}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditPost', {id: item.id})}>
          <Icon name="pen-to-square" size={20} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete}>
          <Icon name="trash-can" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
    marginHorizontal: 20,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  title: {
    fontFamily: 'Montserrat-Regular',
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
  },
});
