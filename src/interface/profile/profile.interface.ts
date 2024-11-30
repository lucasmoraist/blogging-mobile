interface Posts {
  id: string;
  title: string;
  urlImage: string;
}

export interface IProfile {
  id: number;
  name: string;
  school_subject?: string;
  posts?: Posts[];
}
