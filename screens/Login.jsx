import { Text } from "react-native";
import Container from "../components/Container";
import Input from "../components/Input";
import MyButton from "../components/Button";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  function onLogin() {
    // Credenziali hardcoded
    const validCredentials = {
      username: "admin",
      password: "password123"
    };
  
    // Verifica se le credenziali sono corrette
    if (username === validCredentials.username && password === validCredentials.password) {
      console.log('- USERNAME: ', username);
      console.log('- PASSWORD: ', password);
      navigation.navigate("Sito"); // Naviga al navigator principale
    } else {
      alert("Credenziali errate. Per favore, riprova.");
    }
  }
  

  return (
    <Container>
      <Text style={{
        fontSize: 30, 
        color: 'black', 
        fontWeight: 'bold',
        marginBottom: 20,
      }}>
        Login Screen
      </Text>
      <Input
        placeholder="Username"
        value={username}
        onChange={setUsername}
      />
      <Input
        placeholder="Password"
        password={true}
        value={password}
        onChange={setPassword}
      />
      <MyButton 
        onPress={onLogin}
        title="Accedi"
      />
    </Container>
  );
}

export default Login;
