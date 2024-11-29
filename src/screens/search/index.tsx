import {Text} from '@react-navigation/elements';
import {useEffect, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import {SearchPost} from '../../api/post/searchPost';
import {IPost} from '../../interface/post.interface';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../routes/stack.interface';
import Icon from '@react-native-vector-icons/fontawesome6';

export function Search() {
  const navigation = useNavigation<NavigationProp>();
  const [search, setSearch] = useState<string>('');
  const [searchResults, setSearchResults] = useState<IPost[]>([]);

  useEffect(() => {
    async function fetchSearch() {
      const posts = await SearchPost(search);
      setSearchResults(posts);
    }

    fetchSearch();
  }, [search]);

  const findPost = (id: string) => {
    // Salvar resultado da busca no async storage para exibir na tela como buscas recentes
    navigation.navigate('PostDetails', {id: id});
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Explore</Text>
      </View>
      <TextInput
        placeholder="Pesquise por um título"
        
        value={search}
        onChangeText={value => setSearch(value)}
        style={styles.searchInput}
      />

      <View style={styles.searchResults}>
        {search ? (
          <>
            {searchResults.slice(0, 4).map(post => (
              <TouchableOpacity
                key={post.id}
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
            ))}
          </>
        ) : (
          <Text style={styles.recentSearches}>Buscas recentes</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    backgroundColor: '#219ebc',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  searchInput: {
    backgroundColor: '#f1faee',
    margin: 10,
    padding: 10,
    borderRadius: 5,
    fontSize: 18,
  },
  searchResults: {
    margin: 10,
  },
  searchResult: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  searchResultTitle: {
    fontSize: 18,
    marginLeft: 10
  },
  searchResultImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  recentSearches: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
});
