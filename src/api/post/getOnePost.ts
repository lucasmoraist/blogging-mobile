import { IPost } from "../../interface/post/post.interface";
import { api } from "../api";

export async function getOnePost(id: string): Promise<IPost> {
    const repsonse = await api.get(`/posts/${id}`);
    return repsonse.data;
}