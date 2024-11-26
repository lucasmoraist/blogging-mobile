import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {usePost} from '../../hooks/usePost';
import {RenderPost} from './post';

export function Home() {
  const [posts] = usePost();

  const header = () => {
    return (
      <View style={styles.top}>
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
    justifyContent: 'center',
  }
});
