import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigationApp } from "./stack";

export function RoutesContainer() {
    return (
        <NavigationContainer>
            <StackNavigationApp />
        </NavigationContainer>
    )
}