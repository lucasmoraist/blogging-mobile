import { ITeacher } from "./teacher.interface";

export interface IPost {
    title: string;
    content: string;
    url_image: string;
    created_at: string;
    teacher: ITeacher;
}