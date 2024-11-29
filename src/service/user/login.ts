import {api} from '../api';

type Data = {
  username: string;
  password: string;
};

export async function Signin({username, password}: Data) {
  const response = await api
    .post('/user/signin', {
      username,
      password,
    })
    .then(response => response.data)
    .catch(error => console.error(error));

  return response;
}
