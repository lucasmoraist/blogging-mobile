import {Image, StyleSheet, Text, View} from 'react-native';
import {IPost} from '../../interface/post.interface';

interface Props {
  item: IPost;
}

export function RenderPost({item}: Props) {

  const renderContent = (content: string) => {
    return content.length > 80 ? content.slice(0, 80) + '...' : content;
  }

  return (
    <View style={styles.card}>
      <View style={styles.contentView}>
        <Text style={styles.author}>{item.teacher.name}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.content}>{renderContent(item.content)}</Text>
      </View>
      <Image source={{uri: item.url_image}} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    height: 150,
    borderRadius: 2,
    paddingHorizontal: 10,

    borderBottomColor: 'rgba(0, 0, 0, .25)',
    borderBottomWidth: 1,
  },
  author: {
    fontSize: 14,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  contentView: {
    width: 280
  },
  content: {
    fontWeight: 200,
    fontSize: 12,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 5
  },
});
