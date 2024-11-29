import { Text } from "@react-navigation/elements";
import { Image, StyleSheet, View } from "react-native";
import { IPost } from "../../interface/post.interface";

export function RenderPosts(post: IPost) {
  return (
    <View>
      <Image source={{uri: post.urlImage}} style={{width: 50, height: 50}} />
      <Text style={styles.title}>{post.title}</Text>
      <Text>Editar</Text>
      <Text>Excluir</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Montserrat-Regular'
    }
})