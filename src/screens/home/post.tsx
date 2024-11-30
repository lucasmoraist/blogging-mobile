import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../routes/stack.interface';
import {FormatDate} from '../../components/formatDate';

interface Props {
  item: {
    id: string;
    name: string;
    title: string;
    content: string;
    createdat: string;
    urlimage: string;
  };
}

export function RenderPost({item}: Props) {
  const route = useNavigation<NavigationProp>();

  const renderContent =
    item.content.length > 80 ? item.content.slice(0, 80) + '...' : item.content;

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        route.navigate('PostDetails', {id: item.id});
      }}>
      <View style={styles.contentView}>
        <Text style={styles.author}>{item.name}</Text>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.content}>{renderContent}</Text>
        </View>
        <Text style={styles.date}>{FormatDate(item.createdat)}</Text>
      </View>
      <Image source={{uri: item.urlimage}} style={styles.image} />
    </TouchableOpacity>
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
