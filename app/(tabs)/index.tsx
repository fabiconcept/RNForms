import { StyleSheet, Switch, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function index() {
    const [name, setName] = useState("");
    const [darkMode, setDarkMode] = useState(false);
    

    return (
        <SafeAreaView style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>My Name is {name}</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter your name"
                value={name}
                onChangeText={(text) => setName(text)}
                secureTextEntry
                keyboardType="default"
                // autoCorrect={false}
                // autoCapitalize="none"
            />

            <TextInput
                style={[styles.multiline, styles.input]}
                placeholder="Message"
                multiline
                textAlignVertical="top"
            />

            <View style={styles.switchContainer}>
                <Text style={styles.switchText}>Dark Mode</Text>
                <Switch
                    value={darkMode}
                    onValueChange={(value) => setDarkMode(value)}
                    trackColor={{
                        false: "#767577",
                        true: "#81b0ff",
                    }}
                    thumbColor={darkMode ? "#f5dd4b" : "#f5f5f5"}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "plum",
        padding: 10,
        gap: 10
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
    },
    multiline: {
        minHeight: 100,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    switchText: {
        fontSize: 16,
    }
})