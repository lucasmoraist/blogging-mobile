import {api} from '../api';

export async function listAll(page: number, limit: number) {
  const repsonse = await api.get(`/posts?page=${page}&limit=${limit}`);
  return repsonse.data.posts;
}
