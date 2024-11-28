import {PostMock} from '../../mocks/post';

export function SearchPost(title: string) {
  const titleLower = title.toLowerCase();
  return PostMock.filter(post => post.title.toLowerCase().includes(titleLower));
}
