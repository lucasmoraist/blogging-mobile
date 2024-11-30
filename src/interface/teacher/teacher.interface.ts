interface Posts {
  id: string;
  title: string;
  urlImage: string;
}

export interface ITeacher {
  id: number;
  name: string;
  school_subject: string;
  posts: Posts[];
}
