import {IStudent} from '../../interface/student.interface';
import {api} from '../api';

export async function createStudent({name, user_id}: IStudent) {
  const response = api
    .post('/student', {
      name,
      user_id,
    })
    .then(res => res.data)
    .catch(err => console.error(err));

    return response;
}
