import {FlatList, StyleSheet, Text, View} from 'react-native';
import {RenderPost} from './post';
import {usePost} from '../../hooks/usePost';

export function Home() {
  const [posts] = usePost();

  if (posts.length === 0) {
    return <View></View>;
  }

  const header = () => {
    return (
      <View style={styles.top}>
        <Text style={styles.titulo}>Blogging</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={posts}
      renderItem={({item}) => <RenderPost item={item} />}
      ListHeaderComponent={header}
    />
  );
}

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#219ebc',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});
