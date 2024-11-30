import { useEffect, useState } from "react";
import { getOnePost } from "../api/post/getOnePost";
import { RouteProp, useRoute } from "@react-navigation/native";
import { PropsStackRoutes } from "../routes/stack.interface";
import { IPost } from "../interface/post/post.interface";

type PostDetailsRouteProp = RouteProp<PropsStackRoutes, 'PostDetails'>;

export function usePost(): IPost {
  const route = useRoute<PostDetailsRouteProp>();

  const [post, setPost] = useState<IPost>();

  const {id} = route.params;

  useEffect(() => {
    async function fetchPost() {
      const post = await getOnePost(id);
      setPost(post);
    }

    fetchPost();
  }, [id]);

  if (!post) {
    return {} as IPost;
  }

  return post;
}
