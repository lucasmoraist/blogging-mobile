import {FlatList, StyleSheet, Text, View} from 'react-native';
import {RenderPost} from './post';
import {usePost} from '../../hooks/usePost';
import { useEffect, useState } from 'react';

export function Home() {
  const [posts] = usePost();
  const [loaded, setLoaded] = useState(false);

  const header = () => {
    return (
      <View style={styles.top}>
        <Text style={styles.titulo}>Blogging</Text>
      </View>
    );
  };

  useEffect(() => {
    if (posts.length === 0) {
      setLoaded(false); 
    } else {
      setLoaded(true);
    }
  }, [posts]);

  if (!loaded) {
    return <View></View>;
  }

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
