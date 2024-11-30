import {IStudent} from '../../interface/student/student.interface';
import {api} from '../api';

interface StudentRequest {
  name: string;
  user_id: number;
}

export async function createStudent({name, user_id}: StudentRequest) {
  const response = api
    .post('/student', {
      name,
      user_id,
    })
    .then(res => res.data)
    .catch(err => console.error(err));

    return response;
}
