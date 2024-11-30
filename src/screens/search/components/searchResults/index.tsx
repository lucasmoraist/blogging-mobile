import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props {
  post: {
    id: string;
    title: string;
  };
  findPost: (id: string) => void;
}

export function SearchResults({post, findPost}: Props) {
  return (
    <TouchableOpacity
      onPress={() => findPost(post.id)}
      style={styles.searchResult}>
      {/* 
                Adicionar icones de busca
                <Image
                  source={{uri: post.urlimage}}
                  style={styles.searchResultImage}
                /> */}
      <Text style={styles.searchResultTitle}>{post.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  searchResult: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  searchResultTitle: {
    fontSize: 18,
    marginLeft: 10,
  },
});
