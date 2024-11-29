import { api } from '../api';

export async function SearchPost(term: string){
  const response = await api.get(`/posts/search?term=${term}`);
  return response.data;
}