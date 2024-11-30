import { ISearch } from '../../interface/post/search.interface';
import { api } from '../api';

export async function SearchPost(term: string): Promise<ISearch[]>{
  const response = await api.get(`/posts/search?term=${term}`);
  return response.data;
}