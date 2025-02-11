// components/Button.jsx
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

function MyButton({ onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#00aaff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MyButton;
