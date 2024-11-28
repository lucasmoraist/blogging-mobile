import {IUser} from '../../interface/user.interface';
import {TeacherMock} from '../../mocks/teacher';
import {UserMock} from '../../mocks/user';
import {api} from '../api';

type Data = {
  name: string;
  schoolSubject: string;
  username: string;
  password: string;
  role: string;
};

export async function createUser({username, password, role}: IUser) {
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
