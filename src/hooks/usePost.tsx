import { useEffect, useState } from "react"
import { IPost } from "../interface/post.interface"
import { getPosts } from "../service/post/getPosts"

export function usePost() {
    const [posts, setPosts] = useState<IPost[]>()
    useEffect(() => {
        const response = getPosts()
        setPosts(response)
    }, [])

    return [posts]
}