import { PostMock } from "../../mocks/post";

export function getOnePost(id: number) {
    return PostMock.find(p => p.id === id);
}