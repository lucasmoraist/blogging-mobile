import {useEffect, useState} from 'react';
import {SearchPost} from '../api/post/searchPost';
import {IPost} from '../interface/post/post.interface';

interface Posts {
  id: string;
  title: string;
}

export function useSearch(search: string) {
  const [searchResults, setSearchResults] = useState<Posts[]>([]);

  useEffect(() => {
    async function fetchSearch() {
      const posts = await SearchPost(search);
      setSearchResults(posts);
    }

    fetchSearch();
  }, [search]);

  return searchResults;
}
