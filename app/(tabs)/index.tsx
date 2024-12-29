import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function index() {
    const [name, setName] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>My Name is {name}</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Enter your name"
                value={name}
                onChangeText={(text) => setName(text)}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "plum",
        padding: 10,
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
    }
})