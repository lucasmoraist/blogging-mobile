import { SafeAreaView } from "react-native";
import { Home } from "./src/screens/home";
import { PostDetails } from "./src/screens/post-details";

export function App() {
  return <SafeAreaView style={{flex: 1}}>
    <Home />
  </SafeAreaView>
}