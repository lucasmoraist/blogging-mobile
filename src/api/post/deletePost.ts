import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../api";

export async function deletePost(id: string) {
    const token = await AsyncStorage.getItem('token');    

    const response = await api.delete(`/admin/posts/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    console.log(response.data);
    
    return response.data;
}