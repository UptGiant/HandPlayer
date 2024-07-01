import React from "react";
import { Stack } from "expo-router";
const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index"/>
            <Stack.Screen name="camera" options={{headerShown:false}} />
            <Stack.Screen name="player" options={{headerShown:false}} />
        </Stack>
    );
}
export default RootLayout;