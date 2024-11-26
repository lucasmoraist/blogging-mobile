import { FlatList, Image, Text, View } from "react-native";
import { usePost } from "../../hooks/usePost";
import { RenderPost } from "./post";

export function Home() {
    const [posts] = usePost();

    return <FlatList 
        data={posts}
        renderItem={({item}) => <RenderPost item={item}/>}
    />
}