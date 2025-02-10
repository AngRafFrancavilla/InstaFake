import { TouchableOpacity, Text } from "react-native";

function MyButton({ onPress, title }) {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={{
        backgroundColor: '#00aaff', 
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
      }}
    >
      <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default MyButton;
