import {Text} from '@react-navigation/elements';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {IPost} from '../../interface/post.interface';
import Icon from '@react-native-vector-icons/fontawesome6';

export function RenderPosts(post: IPost) {
  const formatedText =
    post.title.length > 20 ? post.title.slice(0, 25) + '...' : post.title;
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={{uri: post.urlImage}} style={styles.image} />
        <Text style={styles.title}>{formatedText}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity>
          <Icon name="pen-to-square" size={20} />
        </TouchableOpacity>
        <TouchableOpacity>
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
