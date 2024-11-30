import AsyncStorage from '@react-native-async-storage/async-storage';
import {api} from '../api';
import { IStudent } from '../../interface/student/student.interface';

export async function getOneStudent(): Promise<IStudent> {
  const token = await AsyncStorage.getItem('token');
  const userId = await AsyncStorage.getItem('user_id');
  
  const response = await api
    .get(`/admin/student/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => response.data)
    .catch(error => console.error(error));

  return response;
}
