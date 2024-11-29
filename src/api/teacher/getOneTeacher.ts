import AsyncStorage from '@react-native-async-storage/async-storage';
import {api} from '../api';

export async function getOneTeacher() {
  const token = await AsyncStorage.getItem('token');
  const userId = await AsyncStorage.getItem('user_id');
  
  const response = await api
    .get(`/admin/teacher/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => response.data)
    .catch(error => console.error(error));

  return response;
}