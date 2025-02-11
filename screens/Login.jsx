// screens/Login.jsx
import React, { useState } from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";
import Container from "../components/Container";
import Input from "../components/Input";
import MyButton from "../components/Button";
import { useNavigation } from "@react-navigation/native";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const onLogin = () => {
    // Credenziali hardcoded
    const validCredentials = { username: "admin", password: "password123" };

    if (
      username === validCredentials.username &&
      password === validCredentials.password
    ) {
      console.log("- USERNAME: ", username);
      console.log("- PASSWORD: ", password);
      navigation.navigate("Sito"); // Naviga al navigator principale
    } else {
      alert("Credenziali errate. Per favore, riprova.");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Container>
        <Text style={styles.title}>Login Screen</Text>
        <Input placeholder="Username" value={username} onChange={setUsername} />
        <Input
          placeholder="Password"
          password
          value={password}
          onChange={setPassword}
        />
        <MyButton onPress={onLogin} title="Accedi" />
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 30,
    color: "#000",
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
});

export default Login;
