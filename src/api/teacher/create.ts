import {api} from '../api';

interface TeacherRequest {
  name: string;
  school_subject?: string;
  user_id: number;
}

export async function createTeacher({name, school_subject, user_id}: TeacherRequest) {
  const response = await api
    .post('/teacher', {
      name,
      school_subject,
      user_id,
    })
    .then(response => response.data)
    .catch(error => console.error(error));

  return response;
}
