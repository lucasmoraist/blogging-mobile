import AsyncStorage from '@react-native-async-storage/async-storage';
import {api} from '../api';

interface PostRequest {
  title: string;
  content: string;
  urlimage: string;
  teacher_id: number;
}

export async function createPost({
  title,
  content,
  urlimage,
  teacher_id,
}: PostRequest) {
  const token = await AsyncStorage.getItem('token');  

  const response = await api
    .post(
      '/admin/posts',
      {
        title,
        content,
        urlImage: urlimage,
        teacher_id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    .then(res => res.data)
    .catch(err => console.error(err));      

    return response;
}
