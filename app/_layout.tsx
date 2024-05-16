import React from "react";
import { Stack } from "expo-router";
const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index"/>
            <Stack.Screen name="camera"/>
            <Stack.Screen name="player"/>
        </Stack>
    );
}
export default RootLayout;