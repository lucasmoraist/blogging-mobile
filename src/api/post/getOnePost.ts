import { api } from "../api";

export async function getOnePost(id: string) {
    const repsonse = await api.get(`/posts/${id}`);
    return repsonse.data;
}