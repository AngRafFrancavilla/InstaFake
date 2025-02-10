import { TextInput } from "react-native";

function MyInput({ placeholder, password, value, onChange }) {
  return (
    <TextInput
      style={{
        backgroundColor: '#fff',
        height: 50, 
        width: '80%',
        padding: 15, 
        borderRadius: 10, 
        fontSize: 16, 
        marginBottom: 20, 
        borderWidth: 1,
        borderColor: '#ccc',
      }}
      placeholder={placeholder}
      secureTextEntry={password}
      value={value}
      onChangeText={onChange}
    />
  );
}

export default MyInput;
