import AsyncStorage from '@react-native-async-storage/async-storage';
import {IPost} from '../../interface/post.interface';
import {api} from '../api';

export async function createPost({
  title,
  content,
  urlimage,
  teacher_id,
}: IPost) {
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
