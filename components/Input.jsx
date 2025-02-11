// components/Input.jsx
import React from "react";
import { TextInput, StyleSheet } from "react-native";

function Input({ placeholder, password, value, onChange }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={password}
      value={value}
      onChangeText={onChange}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    height: 50,
    width: '80%',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default Input;
