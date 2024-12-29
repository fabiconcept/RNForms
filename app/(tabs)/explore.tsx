import { useState } from "react";
import { Button, Image, Platform, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, SafeAreaView } from "react-native";

interface Errors {
    username?: string;
    password?: string;
}

export default function explore() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState<Errors>({});

    const validateForm = () => {
        let errors: Errors = {}

        if (!username.trim()) errors.username = "Username is required";
        if (!password.trim()) errors.password = "Password is required";
        
        setError(errors);

        return Object.keys(errors).length === 0;
    }

    const handleSubmit = () => {
        if(!validateForm()) return;

        console.log("Submitted", username, password);
        setUsername("");
        setPassword("");
        setError({});
    }

    return (
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0} style={styles.container}>
            <View style={styles.form}>
                <Image
                    source={require("@/assets/images/adaptive-icon.png")}
                    style={styles.image}
                />
                <View>
                    <Text style={styles.label}>Username</Text>
                    <TextInput
                        placeholder="Enter your username"
                        style={styles.input}
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                    />
                    {error.username && <Text style={styles.errorText}>{error.username}</Text>}
                </View>
                <View>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        placeholder="Enter your password"
                        secureTextEntry
                        style={styles.input}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                    {error.password && <Text style={styles.errorText}>{error.password}</Text>}
                </View>
                <Button
                    title="Login"
                    onPress={handleSubmit}
                />
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#f5f5f5',
    },
    form: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        gap: 20,
        ...Platform.select({
            ios: {
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
            },
            android: {
                elevation: 5
            }
        }),
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 5
    },
    button: {

    },
    image: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginBottom: 20
    }, 
    errorText: {
        color: 'red',
        marginBottom: 10,
        fontSize: 12
    }
})
