import React from "react";
import { Home } from "../screens/home";
import { PostDetails } from "../screens/post-details";
import { createStackNavigator } from "@react-navigation/stack";
import { PropsStackRoutes } from "./stack.interface";
import { Login } from "../screens/auth/login";
import { Register } from "../screens/auth/register";

const Stack = createStackNavigator<PropsStackRoutes>();

export function StackNavigationApp() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerTitle: "",
                headerShown: false
            }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="PostDetails" component={PostDetails} />
        </Stack.Navigator>
    );
}