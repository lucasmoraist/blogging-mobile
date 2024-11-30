import {IUser} from '../../interface/user/user.interface';
import {api} from '../api';

interface UserRequest {
  username: string;
  password: string;
  role: string;
};

export async function createUser({username, password, role}: UserRequest) {
  const response = await api
    .post('/user', {
      username,
      password,
      role,
    })
    .then(response => response.data)
    .catch(error => console.error(error));

  return response;
}
