import React from "react";
import { Home } from "../screens/home";
import { PostDetails } from "../screens/post-details";
import { createStackNavigator } from "@react-navigation/stack";
import { PropsStackRoutes } from "./stack.interface";

const Stack = createStackNavigator<PropsStackRoutes>();

export function StackNavigationApp() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitle: "",
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="PostDetails" component={PostDetails} />
        </Stack.Navigator>
    );
}