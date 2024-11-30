import AsyncStorage from '@react-native-async-storage/async-storage';
import {api} from '../api';

interface PostRequest {
  title: string;
  content: string;
}

export async function editPost(postId: string, {title, content}: PostRequest) {
  const token = await AsyncStorage.getItem('token');
  const response = await api
    .put(
      `/admin/posts/${postId}`,
      {
        title,
        content,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    .then(response => response.data)
    .catch(error => console.error(error));

  return response;
}
