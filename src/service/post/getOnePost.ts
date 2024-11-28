import { PostMock } from "../../mocks/post";
import { api } from "../api";

// export function getOnePost(id: number) {
//     return PostMock.find(p => p.id === id);
// }

export async function getOnePost(id: string) {
    const repsonse = await api.get(`/posts/${id}`);
    return repsonse.data;
}