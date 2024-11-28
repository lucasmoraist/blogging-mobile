import { ITeacher } from "../../interface/teacher.interface";
import { api } from "../api";

export async function createTeacher({name, school_subject, user_id}: ITeacher) {
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