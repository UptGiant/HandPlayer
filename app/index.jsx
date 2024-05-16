import { View, Text, Pressable } from "react-native";
import { Link, router } from "expo-router";

export default function LandingPage() {
    return (
        <View>
            <Text>Hello, world!</Text>
            <Pressable onPress={() => router.push("camera")}>
                <Text>Camera Page</Text>
            </Pressable>
            <Pressable onPress={() => router.push("player")}>
                <Text>Player Page</Text>
            </Pressable>
        </View>
    );
}