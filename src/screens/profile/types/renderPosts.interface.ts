export interface PostItem {
  id: string;
  title: string;
  urlImage: string;
}

export interface RenderPostsProps {
  item: PostItem;
  onDelete: (id: string) => void;
}
