import {UserMock} from '../../mocks/user';

type Data = {
  username: string;
  password: string;
};

export function AuthLogin({username, password}: Data) {
  const users = UserMock;

  const user = users.find(u => u.username === username);
  
  if (user?.password !== password) {
    throw new Error('Usuário ou senha inválidos');
  }

  if (!user) {
    return {
      error: 'Usuário ou senha inválidos',
    };
  }

  return user;
}
