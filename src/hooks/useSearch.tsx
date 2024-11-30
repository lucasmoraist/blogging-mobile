import {useEffect, useState} from 'react';
import {SearchPost} from '../api/post/searchPost';
import { ISearch } from '../interface/post/search.interface';

export function useSearch(search: string) {
  const [searchResults, setSearchResults] = useState<ISearch[]>([]);

  useEffect(() => {
    async function fetchSearch() {
      const posts = await SearchPost(search);
      setSearchResults(posts);
    }

    fetchSearch();
  }, [search]);

  return searchResults;
}
