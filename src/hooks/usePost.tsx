import {useEffect, useState} from 'react';
import {listAll} from '../api/post/getPosts';

export function usePost() {
  const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      const response = await listAll(1, 10);
      setPosts(response);
    }

    if (posts.length === 0) {
      setLoaded(false);
    } else {
      setLoaded(true);
    }

    fetchPost();
  }, [posts]);

  if (!loaded) {
    return [];
  }

  return [posts];
}
