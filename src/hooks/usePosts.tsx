import {useEffect, useState} from 'react';
import {listAll} from '../api/post/getPosts';

export function usePosts() {
  const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      const response = await listAll(1, 10);
      setPosts(response);
      setLoaded(true);
    }

    fetchPost();
  }, []);

  if (!loaded) {
    return [];
  }

  return [posts];
}
