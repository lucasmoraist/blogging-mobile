import { ITeacher } from "./teacher.interface";

export interface IPost {
    id: number;
    title: string;
    content: string;
    url_image: string;
    created_at: string;
    teacher: ITeacher;
}