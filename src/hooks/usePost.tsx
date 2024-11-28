import {useEffect, useState} from 'react';
import {listAll} from '../service/post/getPosts';

export function usePost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      const response = await listAll(1, 10);
      setPosts(response);
    }

    fetchPost();
  }, []);

  return [posts];
}
