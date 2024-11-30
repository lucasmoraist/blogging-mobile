import {Text} from '@react-navigation/elements';
import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../routes/stack.interface';
import {useSearch} from '../../hooks/useSearch';
import {SearchResults} from './components/searchResults';

export function Search() {
  const [search, setSearch] = useState<string>('');

  const navigation = useNavigation<NavigationProp>();
  const results = useSearch(search);

  const findPost = (id?: string) => {
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
            {results.slice(0, 4).map(post => (
              <SearchResults post={post} findPost={findPost} key={post.id} />
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
