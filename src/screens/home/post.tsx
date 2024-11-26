import {Image, StyleSheet, Text, View} from 'react-native';
import {IPost} from '../../interface/post.interface';

interface Props {
  item: IPost;
}

export function RenderPost({item}: Props) {
  const renderContent = (content: string) => {
    return content.length > 80 ? content.slice(0, 80) + '...' : content;
  };

  const formatDate = (date: string) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString('en', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <View style={styles.card}>
      <View style={styles.contentView}>
        <Text style={styles.author}>{item.teacher.name}</Text>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.content}>{renderContent(item.content)}</Text>
        </View>
        <Text style={styles.date}>{formatDate(item.created_at)}</Text>
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

    height: 180,
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
    width: 260,
    gap: 5,
  },
  content: {
    fontWeight: 200,
    fontSize: 12,
  },
  date: {
    fontSize: 12,
    fontWeight: 200,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 5,
  },
});
